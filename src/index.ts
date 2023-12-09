import { debounce } from "./debounce";
import { throttle } from "./throttle";
// Importamos la biblioteca readline-sync para manejar la entrada de manera síncrona (la aplicación esperará la entrada del usuario antes de continuar)
import * as readlineSync from 'readline-sync';

// Menú para seleccionar la función a probar
function menu() {
    console.log('\n ------------------------------');
    console.log(`|       CLI's JExtremera       |`);
    console.log(' ------------------------------\n');
    console.log('Choose a function to test:');
    console.log('1. Debounce');
    console.log('2. Throttle');
    const choice = readlineSync.questionInt('Enter the number of your choice:');

    switch (choice) {
        case 1:
            testDebounce();
            break;
        case 2:
            testThrottle();
            break;
        default:
            console.log('Invalid choice. Please enter 1 or 2');
            menu();
    }
}

// Una función debouncada es una versión de la función original donde ha sido modificada para incorporar la lógica de debounce
// Creamos una función debouncada que imprime en la consola cuando se ejecuta
function testDebounce() {
    const debouncedFunction = debounce(() => {
        console.log('Function debounced!');
    }, 1000);
    
    // Simulación de eventos que podrían activar la función
    debouncedFunction();
    setTimeout(debouncedFunction, 500);
    setTimeout(debouncedFunction, 1500);
}

// Una función throttle 
// Creamos una función 'throttled' que imprime en la consola cuando se ejecuta
function testThrottle() {
    const throttledFunction = throttle(() => {
        console.log('Function throttled!');
    }, 1000);

    // Simulación de eventos que podrían activar la función
    throttledFunction();
    setTimeout(throttledFunction, 500);
    setTimeout(throttledFunction, 1500);
}

// Inicializar la CLI
menu();