# Counter
I used this app to earn about closures in JavaScript.

## Closures syntax
```js
function outerFunction() {
  let something = 0;
  function innerFunction() {
    something++;
    console.log(`Called ${something} times`);
  }
  return innerFunction; // Note: without the parenthesis
}

counter1 = outerFunction(); // New private scope is created
counter2 = outerFunction(); // New private scope is created
counter1(); // Called 1 times
counter1(); // Called 2 times

counter2(); // Called 1 times

counter1(); // Called 3 times
```