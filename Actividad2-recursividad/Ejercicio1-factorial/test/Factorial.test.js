import { factorial } from '../Factorial'

describe('Suite de pruebas de la funcion Factorial() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Prof. Ivan R. Chenoweth');
  })

  it('Test 1 - debe devolver el factorial 1 para el valor "0"', () => {
    expect(factorial(0)).toBe(1)
  })

  it('Test 2 - debe retornar 120, enviando el parametro con el valor de "5"', () => {
    expect(factorial(5)).toBe(120)
  })

  it('Test 3 - Lanzar error por entrada no válida', () => {
    expect(() => factorial('-')).toThrow('No es un Entero')
    expect(() => factorial(null)).toThrow('No es un Entero')
    expect(() => factorial(undefined)).toThrow('No es un Entero')
    expect(() => factorial(3.142)).toThrow('No es un Entero')
    expect(() => factorial(-1)).toThrow('No es un Numero Positivo')
  })
})
