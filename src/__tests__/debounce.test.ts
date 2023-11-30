// -- Implementar una función debounce utilizando TypeScript y TDD --

// Importamos la función 'debounce' desde un archivo llamado 'debounce.ts'
import { debounce } from '../debounce';

// Definimos un nuevo caso de prueba utilizando la función 'test' de Jest
test('debounce returns a function', () => {
    // Creamos una constante que almacena el resultado de llamar a la función 'debounce'
    // Y le pasamos una función vacía como argumento y un tiempo de espera de 100 milisegundos
    const debouncedFunction = debounce(() => {}, 100);
    // Utilizamos la función 'expect' (Jest) para testear que el tipo de 'debouncedFunction' debe ser una función
    expect(typeof debouncedFunction).toBe('function');
});