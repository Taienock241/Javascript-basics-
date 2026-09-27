# Closures in JavaScript

A **closure** is created when a function remembers and can access variables from the scope where it was defined, even after that outer function has finished running.

## Basic Example

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

The returned function closes over the `count` variable. Although `createCounter` has finished executing, `count` remains available to the returned function.

## Private State

Closures can be used to keep data private and expose only selected operations:

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(100);
account.deposit(50);

console.log(account.getBalance()); // 150
console.log(account.balance); // undefined
```

The `balance` variable cannot be accessed directly from outside the closure.

## Closures in Loops

Use `let` when creating closures in a loop because each iteration gets its own binding:

```javascript
for (let index = 0; index < 3; index += 1) {
  setTimeout(() => {
    console.log(index);
  }, 100);
}

// 0
// 1
// 2
```

With `var`, the callbacks would share one function-scoped variable and typically print `3` three times.

## Common Uses

Closures are useful for:

- Encapsulating private data
- Creating configurable functions
- Preserving state between function calls
- Implementing callbacks and event handlers
- Building function factories

## Key Idea

A closure is not just a function. It is a function together with the surrounding lexical environment that it remembers.
