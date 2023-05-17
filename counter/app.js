function makeCounter(noun) {
  let count = 0;
  return function counter() {
    count += 1;
    return `${count} ${noun}`;
  }
}