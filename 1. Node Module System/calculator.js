function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

module.exports = {
  addition: add,
  sub: minus,
  mul: multiplication,
  div: division,
};
