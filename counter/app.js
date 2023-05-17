function makeBirdCounter() {
  let count = 0;
  function counter() {
    count += 1;
    return count + " birds";
  }
  return counter;
}

function makeDogCounter() {
  let count = 0;
  return function counter() {
    count += 1;
    return count + " dogs";
  }
}
