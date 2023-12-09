import { debounce } from "./debounce";
// Importamos la biblioteca readline-sync para manejar la entrada de manera síncrona (la aplicación esperará la entrada del usuario antes de continuar)
import * as readlineSync from 'readline-sync';

// Una función debouncada es una versión de la función original donde ha sido modificada para incorporar la lógica de debounce
// Creamos una función debouncada que imprime en la consola cuando se ejecuta
const debouncedFunction = debounce(() => {
    console.log('\n ------------------------------');
    console.log(`|       CLI's JExtremera       |`);
    console.log(' ------------------------------\n');
    console.log('Function debounced!');
}, 1000);

// Simulación de eventos que podrían activar la función
debouncedFunction();
setTimeout(debouncedFunction, 500);
setTimeout(debouncedFunction, 1500);