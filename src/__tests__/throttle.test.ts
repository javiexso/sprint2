// tests/index.test.ts
import { throttle } from '../src/index';

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