# Control Statements in JavaScript

Control statements determine which code runs, how often it runs, and when execution
should stop or move to another part of a program. The main groups are:

- **Conditional statements** choose between different paths.
- **Loop statements** repeat a block of code.
- **Branching statements** change or stop the current flow.

Use braces around blocks, even when a block contains only one statement. This makes
future edits safer and keeps the structure easy to read.

## Conditional Statements

### `if`

Use `if` when code should run only when a condition is truthy:

```javascript
const temperature = 24;

if (temperature > 30) {
  console.log("It is hot.");
}
```

JavaScript converts values to `true` or `false` in a condition. Common falsy values
include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

### `if...else`

Use `else` for the alternative path:

```javascript
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Show the dashboard.");
} else {
  console.log("Show the login form.");
}
```

Use `else if` when there are several mutually exclusive conditions:

```javascript
const score = 82;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Needs improvement");
}
```

Conditions are checked from top to bottom. Once one condition is true, the
remaining branches are skipped. Put more specific conditions before general ones.

Prefer strict equality (`===` and `!==`) so JavaScript does not perform unexpected
type conversion:

```javascript
const userId = 42;

if (userId === 42) {
  console.log("User found.");
}
```

### Ternary operator

The ternary operator is a compact conditional expression:

```javascript
const age = 20;
const access = age >= 18 ? "allowed" : "denied";

console.log(access); // allowed
```

Use it for a simple value choice. Prefer `if...else` when branches contain multiple
statements or nested conditions; nested ternaries are difficult to read.

### `switch`

Use `switch` when one expression is compared with several known values:

```javascript
const role = "editor";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("Unknown role");
}
```

`case` values use strict comparison. `break` prevents execution from continuing into
the next case. Omit `break` only when intentional fall-through is part of the
logic, and make that intention clear.

## Loop Statements

### `for`

Use `for` when you need an index, a counter, or precise control over initialization,
the condition, and the update:

```javascript
const numbers = [10, 20, 30];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
```

### `while`

Use `while` when the number of iterations is not known in advance. Make sure the
condition can eventually become false:

```javascript
let attempts = 0;

while (attempts < 3) {
  console.log(`Attempt ${attempts + 1}`);
  attempts += 1;
}
```

If the update is forgotten, a `while` loop can run forever.

### `do...while`

Use `do...while` when the body must run at least once before the condition is
checked:

```javascript
let choice;

do {
  choice = "quit"; // Replace with input from the user.
  console.log("Processing choice...");
} while (choice !== "quit");
```

### `for...of`

Use `for...of` to iterate over the values in an iterable such as an array, string,
or `Set`:

```javascript
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

This is usually clearer than a traditional `for` loop when the index is not needed.

### `for...in`

Use `for...in` to iterate over enumerable property names of an object:

```javascript
const settings = {
  theme: "dark",
  notifications: true,
};

for (const key in settings) {
  if (Object.hasOwn(settings, key)) {
    console.log(`${key}: ${settings[key]}`);
  }
}
```

Do not use `for...in` for array values. It iterates over property names and can
include inherited properties. Use `for...of` or array methods such as `map`,
`filter`, and `forEach` for arrays.

## Branching Statements

### `break`

Use `break` to exit the nearest loop or `switch` immediately:

```javascript
const values = [3, 7, 12, 15];

for (const value of values) {
  if (value > 10) {
    break;
  }

  console.log(value); // 3, then 7
}
```

### `continue`

Use `continue` to skip the rest of the current loop iteration and move to the next
one:

```javascript
for (let number = 1; number <= 5; number += 1) {
  if (number % 2 === 0) {
    continue;
  }

  console.log(number); // 1, 3, 5
}
```

Use these statements sparingly. A clear condition or a helper function is often
easier to understand than deeply nested control flow.

### `return`

Inside a function, `return` stops execution of that function and optionally sends a
value back to the caller:

```javascript
function getDiscount(price, isMember) {
  if (!isMember) {
    return 0;
  }

  return price * 0.1;
}

console.log(getDiscount(100, true)); // 10
```

An early return can remove unnecessary nesting and make invalid cases explicit.

## Choosing the Right Statement

| Situation | Recommended statement |
| --- | --- |
| One condition with an optional alternative | `if...else` |
| Several simple value choices | Ternary operator |
| One expression compared with known values | `switch` |
| A counter or index controls repetition | `for` |
| Repetition continues until a condition changes | `while` |
| The body must run at least once | `do...while` |
| Iterate over array or iterable values | `for...of` |
| Iterate over object property names | `for...in` |

## Practical Guidelines

1. Keep conditions simple. Extract complicated checks into named variables or
   functions.
2. Use `===` and `!==` unless type coercion is deliberately required.
3. Prefer `const` for values that are not reassigned and `let` for loop variables
   or values that change. Avoid `var` in modern JavaScript.
4. Ensure every loop has a clear stopping condition.
5. Prefer guard clauses and early `return` statements over deeply nested blocks.
6. Use array methods when they express the intent more clearly than a manual loop:

   ```javascript
   const prices = [10, 20, 30];
   const discountedPrices = prices.map((price) => price * 0.9);
   ```

7. Test boundary cases, such as an empty array, the first and last valid values,
   and values just outside the expected range.
