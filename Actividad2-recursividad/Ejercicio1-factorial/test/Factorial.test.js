import { factorial } from '../Factorial'

describe('Factorial', () => {

  beforeAll(() => {
    console.info(' Pruebas para la Función factorial(), para encontrar factorial usando recursividad - Autor: Hecho por Ivan R. Chenoweth');
  })

  it('debe devolver el factorial 1 para el valor "0"', () => {
    expect(factorial(0)).toBe(1)
  })

  it('deberia retornar 120 fara el valor de "5"', () => {
    expect(factorial(5)).toBe(120)
  })

  it('Lanzar error por entrada no válida', () => {
    expect(() => factorial('-')).toThrow('No es un Entero')
    expect(() => factorial(null)).toThrow('No es un Entero')
    expect(() => factorial(undefined)).toThrow('No es un Entero')
    expect(() => factorial(3.142)).toThrow('No es un Entero')
    expect(() => factorial(-1)).toThrow('No es un Numero Positivo')
  })
})
