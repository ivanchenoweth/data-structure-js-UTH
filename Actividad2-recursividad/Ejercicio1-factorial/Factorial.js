/**
 * @function Factorial
 * @description función para encontrar factorial usando recursividad.
 * @param {Integer} n - Enero de Entrada
 * @return {Integer} - Factorial de n.
 * @see [Factorial](https://en.wikipedia.org/wiki/Factorial)
 * @example 5! = 1*2*3*4*5 = 120
 * @example 2! = 1*2 = 2
 */

const factorial = (n) => {
  if (!Number.isInteger(n)) {
    throw new RangeError('No es un Entero')
  }

  if (n < 0) {
    throw new RangeError('No es un Numero Positivo')
  }

  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

export { factorial }
