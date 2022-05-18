// importamos la funcion que vamos a testear
import { registerUser } from '../src/lib/authConfig.js';

describe('registerUser', () => {
  test('debería ser una función', () => {
    expect(typeof registerUser).toBe('function');
  });
});
