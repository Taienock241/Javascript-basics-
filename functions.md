# JavaScript Functions Reference

This document is a practical reference for JavaScript functions, including
functions you write yourself and commonly used built-in functions. JavaScript
has many host-specific APIs, so this is organized by the standard language and
the browser APIs most commonly used in web pages.

## 1. What Is a Function?

A function is a reusable block of code that can accept inputs (parameters) and
return an output.

```javascript
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const result = add(2, 3); // 5
```

- **Function name:** `add`
- **Parameters:** `firstNumber`, `secondNumber`
- **Arguments:** `2`, `3`
- **Return value:** `5`

If a function has no `return` statement, it returns `undefined`.

## 2. User-Defined Functions

### Function declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

Function declarations are hoisted, so they can be called before their
declaration in the same scope.

### Function expression

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};
```

The function is assigned to a variable. The variable must be initialized before
it is called.

### Arrow function

```javascript
const square = (number) => number * number;
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
```

For multiple statements, use braces and an explicit `return`:

```javascript
const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return null;
  }

  return firstNumber / secondNumber;
};
```

Arrow functions do not have their own `this`, `arguments`, or `prototype`.

### Default parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

### Rest parameters

Rest parameters collect remaining arguments into an array:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

sum(1, 2, 3); // 6
```

### Callback functions

A callback is a function passed to another function:

```javascript
function processValue(value, callback) {
  return callback(value);
}

processValue(5, (number) => number * 2); // 10
```

### Immediately invoked function expression (IIFE)

```javascript
(() => {
  const privateValue = 42;
  console.log(privateValue);
})();
```

An IIFE is defined and called immediately.

### Generator function

```javascript
function* countToTwo() {
  yield 1;
  yield 2;
}

const counter = countToTwo();
counter.next(); // { value: 1, done: false }
counter.next(); // { value: 2, done: false }
```

### Async function

An `async` function always returns a Promise:

```javascript
async function getMessage() {
  return "Finished";
}

getMessage().then(console.log);
```

### Method

A function stored as an object property is a method:

```javascript
const user = {
  name: "Ada",
  greet() {
    return `Hello, ${this.name}`;
  },
};
```

### Constructor function

```javascript
function User(name) {
  this.name = name;
}

const user = new User("Ada");
```

For new code, prefer `class` syntax when creating object types.

## 3. Function Control and Inspection

### `call()`

Calls a function with a selected `this` value and individual arguments:

```javascript
function introduce(greeting) {
  return `${greeting}, ${this.name}`;
}

introduce.call({ name: "Ada" }, "Hello"); // "Hello, Ada"
```

### `apply()`

Like `call`, but receives arguments as an array:

```javascript
Math.max.apply(null, [3, 8, 2]); // 8
```

Prefer the spread syntax in modern JavaScript:

```javascript
Math.max(...[3, 8, 2]); // 8
```

### `bind()`

Creates a new function with a permanently selected `this` value and optionally
pre-filled arguments:

```javascript
const person = { name: "Ada" };
const getName = function () {
  return this.name;
}.bind(person);

getName(); // "Ada"
```

### `Function` constructor

```javascript
const add = new Function("a", "b", "return a + b");
```

Avoid this constructor because it evaluates strings as code and is difficult to
secure and optimize. Use function declarations or expressions instead.

## 4. Global Built-In Functions

These functions are available globally in JavaScript environments.

| Function | Purpose | Example |
| --- | --- | --- |
| `parseInt(value, radix)` | Converts a string to an integer | `parseInt("42", 10)` |
| `parseFloat(value)` | Converts a string to a decimal number | `parseFloat("3.14")` |
| `Number(value)` | Converts a value to a number | `Number("42")` |
| `String(value)` | Converts a value to a string | `String(42)` |
| `Boolean(value)` | Converts a value to a Boolean | `Boolean(1)` |
| `isNaN(value)` | Tests whether a value becomes `NaN` after number conversion | `isNaN("x")` |
| `isFinite(value)` | Tests whether a value becomes a finite number | `isFinite("42")` |
| `decodeURI(uri)` | Decodes a complete URI | `decodeURI(url)` |
| `decodeURIComponent(value)` | Decodes one URI component | `decodeURIComponent(value)` |
| `encodeURI(uri)` | Encodes a URI without escaping URI separators | `encodeURI(url)` |
| `encodeURIComponent(value)` | Encodes one URI component | `encodeURIComponent(value)` |
| `eval(code)` | Evaluates a string as JavaScript | Avoid in normal application code |
| `queueMicrotask(callback)` | Queues a microtask | `queueMicrotask(() => console.log("done"))` |
| `structuredClone(value)` | Deeply clones supported data | `structuredClone(settings)` |
| `atob(value)` | Decodes Base64 in browsers | `atob(encoded)` |
| `btoa(value)` | Encodes a string as Base64 in browsers | `btoa("hello")` |

Prefer `Number.isNaN()` and `Number.isFinite()` over the global versions when
you want to avoid implicit type conversion.

## 5. Object Functions

### Static `Object` functions

| Function | Purpose |
| --- | --- |
| `Object.keys(object)` | Returns an array of own enumerable property names |
| `Object.values(object)` | Returns an array of own enumerable property values |
| `Object.entries(object)` | Returns `[key, value]` pairs |
| `Object.fromEntries(entries)` | Creates an object from key-value pairs |
| `Object.hasOwn(object, key)` | Safely checks whether an object owns a property |
| `Object.assign(target, ...sources)` | Copies enumerable properties into a target |
| `Object.create(prototype)` | Creates an object with a selected prototype |
| `Object.freeze(object)` | Prevents changes to an object at the top level |
| `Object.seal(object)` | Prevents adding or removing properties |
| `Object.is(value1, value2)` | Compares values using SameValue semantics |
| `Object.defineProperty(object, key, descriptor)` | Defines a property descriptor |
| `Object.getOwnPropertyNames(object)` | Returns own string property names |
| `Object.getOwnPropertySymbols(object)` | Returns own symbol properties |
| `Object.getPrototypeOf(object)` | Returns an object's prototype |
| `Object.setPrototypeOf(object, prototype)` | Changes an object's prototype |

```javascript
const scores = { Ada: 10, Lin: 8 };

Object.keys(scores); // ["Ada", "Lin"]
Object.values(scores); // [10, 8]
Object.entries(scores); // [["Ada", 10], ["Lin", 8]]
Object.hasOwn(scores, "Ada"); // true
```

### Object instance methods

| Function | Purpose |
| --- | --- |
| `object.hasOwnProperty(key)` | Checks an object's own property (avoid on untrusted objects) |
| `object.toString()` | Returns a string representation |
| `object.valueOf()` | Returns the primitive representation |
| `object.propertyIsEnumerable(key)` | Tests whether an own property is enumerable |

`Object.hasOwn(object, key)` is safer than calling
`object.hasOwnProperty(key)` when an object may override that method.

## 6. Array Functions

### Static array functions

| Function | Purpose |
| --- | --- |
| `Array.isArray(value)` | Tests whether a value is an array |
| `Array.from(value)` | Creates an array from an iterable or array-like value |
| `Array.of(...values)` | Creates an array from its arguments |

### Array instance functions

| Function | Purpose |
| --- | --- |
| `array.at(index)` | Returns an item, supporting negative indexes |
| `array.push(...items)` | Adds items to the end and returns the new length |
| `array.pop()` | Removes and returns the last item |
| `array.unshift(...items)` | Adds items to the beginning |
| `array.shift()` | Removes and returns the first item |
| `array.concat(...values)` | Combines arrays or values into a new array |
| `array.slice(start, end)` | Copies part of an array without changing it |
| `array.splice(start, count, ...items)` | Adds, removes, or replaces items in place |
| `array.includes(value)` | Tests whether a value exists |
| `array.indexOf(value)` | Returns the first matching index or `-1` |
| `array.lastIndexOf(value)` | Returns the last matching index or `-1` |
| `array.find(callback)` | Returns the first matching value |
| `array.findIndex(callback)` | Returns the first matching index |
| `array.findLast(callback)` | Returns the last matching value |
| `array.some(callback)` | Tests whether at least one item matches |
| `array.every(callback)` | Tests whether all items match |
| `array.filter(callback)` | Creates an array of matching items |
| `array.map(callback)` | Creates an array of transformed items |
| `array.flat(depth)` | Flattens nested arrays |
| `array.flatMap(callback)` | Maps and then flattens one level |
| `array.reduce(callback, initialValue)` | Reduces items to one value |
| `array.reduceRight(callback, initialValue)` | Reduces from right to left |
| `array.forEach(callback)` | Runs a function for each item |
| `array.sort(compareFunction)` | Sorts the array in place |
| `array.reverse()` | Reverses the array in place |
| `array.toSorted(compareFunction)` | Returns a sorted copy |
| `array.toReversed()` | Returns a reversed copy |
| `array.join(separator)` | Creates a string from array items |
| `array.toString()` | Converts array items to a comma-separated string |
| `array.entries()` | Returns an iterator of index-value pairs |
| `array.keys()` | Returns an iterator of indexes |
| `array.values()` | Returns an iterator of values |

```javascript
const numbers = [1, 2, 3, 4];

numbers.map((number) => number * 2); // [2, 4, 6, 8]
numbers.filter((number) => number > 2); // [3, 4]
numbers.reduce((total, number) => total + number, 0); // 10
numbers.some((number) => number > 3); // true
numbers.every((number) => number > 0); // true
```

## 7. String Functions

| Function | Purpose |
| --- | --- |
| `string.at(index)` | Returns a character, supporting negative indexes |
| `string.charAt(index)` | Returns the character at an index |
| `string.charCodeAt(index)` | Returns the UTF-16 code |
| `string.codePointAt(index)` | Returns the Unicode code point |
| `string.includes(value)` | Tests whether a substring exists |
| `string.startsWith(value)` | Tests the beginning of a string |
| `string.endsWith(value)` | Tests the end of a string |
| `string.indexOf(value)` | Finds the first occurrence |
| `string.lastIndexOf(value)` | Finds the last occurrence |
| `string.slice(start, end)` | Extracts part of a string |
| `string.substring(start, end)` | Extracts part, treating negative values as zero |
| `string.substr(start, length)` | Legacy extraction method; avoid in new code |
| `string.split(separator)` | Converts a string into an array |
| `string.trim()` | Removes whitespace at both ends |
| `string.trimStart()` | Removes whitespace at the beginning |
| `string.trimEnd()` | Removes whitespace at the end |
| `string.toLowerCase()` | Converts to lowercase |
| `string.toUpperCase()` | Converts to uppercase |
| `string.replace(search, replacement)` | Replaces the first match |
| `string.replaceAll(search, replacement)` | Replaces all matches |
| `string.match(pattern)` | Returns regular-expression matches |
| `string.matchAll(pattern)` | Returns an iterator of all matches |
| `string.search(pattern)` | Returns the index of a pattern |
| `string.concat(...strings)` | Joins strings |
| `string.repeat(count)` | Repeats a string |
| `string.padStart(length, fill)` | Pads the beginning |
| `string.padEnd(length, fill)` | Pads the end |
| `string.localeCompare(other)` | Compares strings using locale rules |
| `string.normalize()` | Normalizes Unicode text |

```javascript
const message = "  Hello JavaScript  ";

message.trim().toUpperCase(); // "HELLO JAVASCRIPT"
message.includes("JavaScript"); // true
message.replace("JavaScript", "world"); // "  Hello world  "
```

## 8. Number and Math Functions

### Static `Number` functions

| Function | Purpose |
| --- | --- |
| `Number.isNaN(value)` | Tests for the actual `NaN` value |
| `Number.isFinite(value)` | Tests for a finite number without conversion |
| `Number.isInteger(value)` | Tests for an integer |
| `Number.isSafeInteger(value)` | Tests whether an integer is safely representable |
| `Number.parseInt(value, radix)` | Parses an integer |
| `Number.parseFloat(value)` | Parses a decimal number |

### Number instance functions

| Function | Purpose |
| --- | --- |
| `number.toFixed(digits)` | Formats fixed decimal places |
| `number.toPrecision(digits)` | Formats significant digits |
| `number.toString(radix)` | Converts a number to a string |
| `number.toLocaleString()` | Formats according to locale |
| `number.valueOf()` | Returns the primitive number |

### `Math` functions

| Function | Purpose |
| --- | --- |
| `Math.abs(value)` | Absolute value |
| `Math.ceil(value)` | Rounds upward |
| `Math.floor(value)` | Rounds downward |
| `Math.round(value)` | Rounds to the nearest integer |
| `Math.trunc(value)` | Removes the fractional part |
| `Math.max(...values)` | Largest value |
| `Math.min(...values)` | Smallest value |
| `Math.pow(base, exponent)` | Raises a number to a power |
| `Math.sqrt(value)` | Square root |
| `Math.cbrt(value)` | Cube root |
| `Math.random()` | Pseudorandom value from `0` to less than `1` |
| `Math.sign(value)` | Sign of a number |
| `Math.hypot(...values)` | Square root of the sum of squares |
| `Math.log(value)` | Natural logarithm |
| `Math.exp(value)` | Exponential value |
| `Math.sin(value)`, `Math.cos(value)`, `Math.tan(value)` | Trigonometric functions |
| `Math.asin(value)`, `Math.acos(value)`, `Math.atan(value)` | Inverse trigonometric functions |
| `Math.atan2(y, x)` | Angle from rectangular coordinates |

## 9. Date and Time Functions

| Function | Purpose |
| --- | --- |
| `Date.now()` | Current timestamp in milliseconds |
| `Date.parse(string)` | Parses a date string into a timestamp |
| `new Date()` | Creates a date object |
| `date.getFullYear()` | Local year |
| `date.getMonth()` | Local month, from `0` to `11` |
| `date.getDate()` | Local day of the month |
| `date.getDay()` | Local day of the week |
| `date.getHours()` | Local hour |
| `date.getMinutes()` | Local minute |
| `date.getSeconds()` | Local second |
| `date.getTime()` | Timestamp in milliseconds |
| `date.toISOString()` | UTC ISO date string |
| `date.toLocaleString()` | Locale-formatted date and time |
| `date.setFullYear(year)` | Changes the local year |

```javascript
const now = new Date();
console.log(now.toISOString());
```

Use ISO strings and explicit time zones when exchanging dates between systems.

## 10. JSON Functions

| Function | Purpose |
| --- | --- |
| `JSON.parse(string)` | Converts JSON text to a JavaScript value |
| `JSON.stringify(value)` | Converts a JavaScript value to JSON text |

```javascript
const text = JSON.stringify({ name: "Ada" });
const object = JSON.parse(text);
```

`JSON.parse` throws a `SyntaxError` for invalid JSON. Functions, `undefined`, and
symbols are not represented as ordinary JSON values.

## 11. Regular Expression Functions

```javascript
const pattern = /javascript/gi;
```

| Function | Purpose |
| --- | --- |
| `regex.test(string)` | Tests whether a match exists |
| `regex.exec(string)` | Returns detailed match data |
| `string.match(regex)` | Returns matches |
| `string.matchAll(regex)` | Iterates over detailed matches |
| `string.replace(regex, replacement)` | Replaces matching text |
| `string.search(regex)` | Finds the first matching index |
| `string.split(regex)` | Splits using a pattern |

## 12. `Map`, `Set`, `WeakMap`, and `WeakSet`

### `Map`

| Function | Purpose |
| --- | --- |
| `map.set(key, value)` | Adds or replaces an entry |
| `map.get(key)` | Gets a value |
| `map.has(key)` | Tests whether a key exists |
| `map.delete(key)` | Removes an entry |
| `map.clear()` | Removes all entries |
| `map.entries()` | Returns key-value pairs |
| `map.keys()` | Returns keys |
| `map.values()` | Returns values |
| `map.forEach(callback)` | Runs a callback for each entry |

### `Set`

| Function | Purpose |
| --- | --- |
| `set.add(value)` | Adds a value |
| `set.has(value)` | Tests whether a value exists |
| `set.delete(value)` | Removes a value |
| `set.clear()` | Removes all values |
| `set.values()` | Returns values |
| `set.forEach(callback)` | Runs a callback for each value |

`WeakMap` uses `set`, `get`, `has`, and `delete`. `WeakSet` uses `add`, `has`,
and `delete`. Weak collections are not iterable.

## 13. `Promise` Functions

| Function | Purpose |
| --- | --- |
| `Promise.resolve(value)` | Creates a fulfilled Promise |
| `Promise.reject(reason)` | Creates a rejected Promise |
| `Promise.all(promises)` | Fulfills when all fulfill; rejects when one rejects |
| `Promise.allSettled(promises)` | Waits for every Promise to settle |
| `Promise.race(promises)` | Settles when the first Promise settles |
| `Promise.any(promises)` | Fulfills when one fulfills; rejects if all reject |
| `promise.then(onFulfilled, onRejected)` | Handles fulfillment or rejection |
| `promise.catch(onRejected)` | Handles rejection |
| `promise.finally(callback)` | Runs after settlement |

```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then((values) => console.log(values)); // [1, 2]
```

## 14. Browser API Functions

These are not part of the core JavaScript language; they are supplied by the
browser.

### DOM selection and creation

| Function | Purpose |
| --- | --- |
| `document.getElementById(id)` | Finds one element by ID |
| `document.querySelector(selector)` | Finds the first CSS selector match |
| `document.querySelectorAll(selector)` | Finds all CSS selector matches |
| `document.getElementsByClassName(name)` | Finds elements by class |
| `document.getElementsByTagName(name)` | Finds elements by tag |
| `document.createElement(tagName)` | Creates an element |
| `document.createTextNode(text)` | Creates a text node |
| `element.append(...nodes)` | Adds nodes or text at the end |
| `element.appendChild(node)` | Adds one node at the end |
| `element.remove()` | Removes an element |
| `element.addEventListener(type, callback)` | Registers an event handler |
| `element.removeEventListener(type, callback)` | Removes an event handler |
| `element.setAttribute(name, value)` | Sets an HTML attribute |
| `element.getAttribute(name)` | Reads an HTML attribute |
| `element.removeAttribute(name)` | Removes an HTML attribute |

Example:

```javascript
const button = document.querySelector("#save");

button.addEventListener("click", () => {
  console.log("Saved");
});
```

### Timers

| Function | Purpose |
| --- | --- |
| `setTimeout(callback, milliseconds)` | Runs once after a delay |
| `clearTimeout(id)` | Cancels a timeout |
| `setInterval(callback, milliseconds)` | Runs repeatedly |
| `clearInterval(id)` | Cancels an interval |
| `requestAnimationFrame(callback)` | Runs before the next repaint |
| `cancelAnimationFrame(id)` | Cancels an animation frame |

### Network and browser utilities

| Function | Purpose |
| --- | --- |
| `fetch(url, options)` | Makes an HTTP request and returns a Promise |
| `console.log(...values)` | Writes informational output |
| `console.error(...values)` | Writes error output |
| `console.warn(...values)` | Writes warning output |
| `console.table(value)` | Displays tabular data |
| `alert(message)` | Displays a blocking alert |
| `confirm(message)` | Displays a confirmation dialog |
| `prompt(message)` | Requests text input |
| `localStorage.setItem(key, value)` | Stores a string locally |
| `localStorage.getItem(key)` | Reads a stored string |
| `localStorage.removeItem(key)` | Removes one stored value |
| `localStorage.clear()` | Removes all stored values |

## 15. Functions in `forInloop.js`

The original example file uses these functions:

| Function | Category | Purpose |
| --- | --- | --- |
| `loop()` | User-defined | Displays properties from `obj` |
| `loop2()` | User-defined | Displays salary calculations |
| `document.getElementById()` | Browser built-in | Finds an element by ID |
| `document.querySelector()` | Browser built-in | Finds an element with a CSS selector |

The file also uses `for...in`, `for`, bracket notation, template literals,
`style`, and `innerHTML`. These are language statements, syntax, or properties,
not functions.

## 16. Choosing a Function

- Use a **declaration** for a named reusable operation.
- Use an **arrow function** for short callbacks and functions that should
  preserve the surrounding `this`.
- Use `map` to transform every array item.
- Use `filter` to keep matching items.
- Use `find` to retrieve one matching item.
- Use `some` or `every` for boolean checks.
- Use `reduce` to combine values into one result.
- Use `Object.keys`, `Object.values`, or `Object.entries` for object data.
- Use `for...of` for iterable values and `for...in` for enumerable object keys.
- Prefer `textContent` over `innerHTML` for untrusted text.
- Avoid `eval` and the `Function` constructor.
