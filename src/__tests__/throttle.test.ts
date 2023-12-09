// -- Implementar una función throttle utilizando TypeScript y TDD --

// Importamos la función 'throttle' desde un archivo llamado 'throttle.ts'
import { throttle } from '../throttle';
// Habilitamos los 'fake timers' de Jest
// jest.useFakeTimers();

describe('throttle function', () => {
  it('should execute the function immediately on the first call', () => {
    // Mock: es una versión simulada de algo. En este caso es una función falsa que imita el comportamiento de una función real. Esto nos permite 'Aislar pruebas' y tener 'Control del resultado'
    const mockFunction = jest.fn();
    const throttledFunction = throttle(mockFunction, 1000);

    throttledFunction();

    expect(mockFunction).toHaveBeenCalled();
  });

  it('should execute the function only once in the specified delay', () => {
    const mockFunction = jest.fn();
    const throttledFunction = throttle(mockFunction, 1000);

    // Primera llamada a la función
    throttledFunction();

    // Llamadas adicionales antes de que se haya pasado el 'delay'
    throttledFunction();
    throttledFunction();
    throttledFunction();

    expect(mockFunction).toHaveBeenCalledTimes(1);
    
    // Llamada después de que haya pasado el retraso
    // Función proporcionada por Jest para avanzar en el tiempo simulado de Jest, simula que han pasado 1000ms
    jest.advanceTimersByTime(1000);

    //Avanzar el tiempo de forma controlada
    // jest.runOnlyPendingTimers();

    // Llamada después de avanzar el tiempo
    throttledFunction();
    // Esperamos que la función se haya ejecutado una única vez
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  // it('should execute the function multiple times if calls are separated by more than the delay', () => {
  //   const mockFunction = jest.fn();
  //   const throttledFunction = throttle(mockFunction, 1000);

  //   //Primera llamada a la función
  //   throttledFunction();

  //   //Llamada después de 50ms (menos del delay)
  //   setTimeout(() => throttledFunction(), 500);
  //   //Llamada después de 150ms (más del delay)
  //   setTimeout(() => throttledFunction(), 1500);
  //   //Llamada después de 250ms (más del delay)
  //   setTimeout(() => throttledFunction(), 2500);
  //   //Llamada después de 350ms (más del delay)
  //   setTimeout(() => throttledFunction(), 3500);

  //   // Llamada después de que haya pasado el retraso
  //   jest.advanceTimersByTime(1000);

  //   // Esperamos que la función se haya ejecutado 4 veces (Primera llamada + tres llamdas que se llaman después de ms>delay)
  //   expect(mockFunction).toHaveBeenCalledTimes(4);
  // });

  // it('should execute the function at least once if calls are closely spaced within the delay', () => {
  //   const mockFunction = jest.fn();
  //   const throttledFunction = throttle(mockFunction, 1000);

  //   //Primera llamada a la función
  //   throttledFunction();

  //   setTimeout(() => throttledFunction(), 500);
  //   setTimeout(() => throttledFunction(), 800);
  //   setTimeout(() => throttledFunction(), 1200);

  //   jest.advanceTimersByTime(1000);
  //   console.log(`4. Núm. veces llamada función throttled: ` + mockFunction.mock.calls.length);
  //   // Esperamos que la función se haya ejecutado al menos una vez
  //   expect(mockFunction).toHaveBeenCalledTimes(1);
  // });
});


/* Test limitar la frecuencia de ejecuciones
// Importamos la función 'throttle' desde un archivo llamado 'throttle.ts'
import { throttle } from '../throttle';

test('throttle should limit the execution frequency', () => {
  // Arrange
  const callback = jest.fn();
  const throttledFunction = throttle(callback, 100);

  // Act
  throttledFunction();
  throttledFunction();
  throttledFunction();

  // Assert
  expect(callback).toHaveBeenCalledTimes(1);
});
*/