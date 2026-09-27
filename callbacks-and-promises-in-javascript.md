# Callbacks and Promises in JavaScript

## Callbacks

A **callback** is a function passed to another function so it can be called later, usually after an asynchronous operation finishes.

```javascript
function fetchUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Ada" });
  }, 1000);
}

fetchUser((user) => {
  console.log(user.name); // Ada
});
```

The callback runs after the simulated request completes.

## Callback Errors

A common Node.js pattern is to pass the error as the first argument:

```javascript
function readData(callback) {
  const successful = true;

  if (!successful) {
    callback(new Error("Could not read data"));
    return;
  }

  callback(null, "Data loaded");
}

readData((error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(data);
});
```

Nested callbacks can become difficult to read and maintain. This is sometimes called **callback hell**.

## Promises

A **Promise** represents the eventual success or failure of an asynchronous operation. It can be in one of three states:

- `pending`
- `fulfilled`
- `rejected`

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ada" });
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user.name); // Ada
  })
  .catch((error) => {
    console.error(error.message);
  });
```

## Resolving and Rejecting Promises

Use `resolve` for success and `reject` for failure:

```javascript
function divide(firstNumber, secondNumber) {
  return new Promise((resolve, reject) => {
    if (secondNumber === 0) {
      reject(new Error("Cannot divide by zero"));
      return;
    }

    resolve(firstNumber / secondNumber);
  });
}

divide(10, 2)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
```

## Promise Chaining

Each `.then()` can return a value or another Promise. The next step waits for that result:

```javascript
fetchUser()
  .then((user) => {
    return user.name;
  })
  .then((name) => {
    console.log(`User: ${name}`);
  })
  .catch((error) => {
    console.error("Request failed:", error.message);
  });
```

## Async and Await

`async` and `await` provide a cleaner syntax for working with Promises:

```javascript
async function displayUser() {
  try {
    const user = await fetchUser();
    console.log(user.name);
  } catch (error) {
    console.error(error.message);
  }
}

displayUser();
```

An `async` function always returns a Promise. `await` pauses that function until the Promise settles, without blocking the rest of the program.

## Running Promises in Parallel

Use `Promise.all()` when multiple independent operations can run at the same time:

```javascript
function fetchSettings() {
  return Promise.resolve({ theme: "light" });
}

async function loadPage() {
  const [user, settings] = await Promise.all([
    fetchUser(),
    fetchSettings(),
  ]);

  console.log(user, settings);
}
```

## Callbacks vs. Promises

| Feature | Callbacks | Promises |
| --- | --- | --- |
| Syntax | Functions passed to functions | `.then()` and `.catch()` |
| Error handling | Usually a convention such as `(error, data)` | Built-in rejection handling |
| Composition | Can become deeply nested | Supports readable chaining |
| Modern usage | Common in event handlers and older APIs | Common for asynchronous operations |

Use callbacks when an API expects one, especially for events. Use Promises for new asynchronous operations because they are easier to compose and handle errors with.
