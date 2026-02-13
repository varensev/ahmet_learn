const ADD = 'add'
const MULTI = 'multi'
const SUBTRACT = 'subtract'

/* function calc(operation, a, b) {
  if (operation === ADD) {
    return a + b
  }
  if (operation === MULTI) {
    return a * b
  }
  if (operation === SUBTRACT) {
    return a - b
  }
} */
function calc(operation, a, b) {
  switch (operation) {
    case ADD:
      return a + b;
    case MULTI:
      return a * b
    case SUBTRACT:
      return a - b
    default:
      return 'Операция не выбрана'
  }
}

const resultMulti = calc(MULTI, 2, 3)
const resultSubtract = calc(SUBTRACT, 3, 2)
const resultAdd = calc(ADD, 1, 2)

console.log(`Сложение: ${resultAdd}`, `Вычетание: ${resultSubtract}`, `Умножение: ${resultMulti}`)
console.log(calc('asd', 2, 3))