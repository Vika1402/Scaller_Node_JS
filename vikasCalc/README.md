
# **How to Use `@mr.vika/vikas_calc`**

`@mr.vika/vikas_calc` is a simple calculator package that provides basic arithmetic operations like addition, subtraction, multiplication, and division. Follow the steps below to use it:

## **Installation**
First, install the package using npm:

```bash
npm install @mr.vika/vikas_calc
```

## **Usage**
After installing the package, you can import it into your project and use the provided functions. Here's an example:

```javascript
// Import the package
const calc = require('@mr.vika/vikas_calc');

// Perform basic calculations
console.log(calc.addition(10, 5)); // Output: 15
console.log(calc.sub(10, 5));      // Output: 5
console.log(calc.mul(10, 5));      // Output: 50
console.log(calc.div(10, 5));      // Output: 2
```

## **API Reference**

### 1. `addition(a, b)`
- **Description:** Adds two numbers.
- **Parameters:**
  - `a` (Number): First number.
  - `b` (Number): Second number.
- **Returns:** Sum of `a` and `b`.

### 2. `sub(a, b)`
- **Description:** Subtracts the second number from the first.
- **Parameters:**
  - `a` (Number): First number.
  - `b` (Number): Second number.
- **Returns:** Difference of `a` and `b`.

### 3. `mul(a, b)`
- **Description:** Multiplies two numbers.
- **Parameters:**
  - `a` (Number): First number.
  - `b` (Number): Second number.
- **Returns:** Product of `a` and `b`.

### 4. `div(a, b)`
- **Description:** Divides the first number by the second.
- **Parameters:**
  - `a` (Number): First number.
  - `b` (Number): Second number.
- **Returns:** Quotient of `a` divided by `b`.
- **Note:** If `b` is `0`, the function will return `Infinity` or `NaN` based on JavaScript's default behavior.

---

Let me know if you need further help improving the package!