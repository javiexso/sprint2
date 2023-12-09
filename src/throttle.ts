// Definimos un tipo que describe una función, y toma una función como primer parámetro (no acepta argmunetos y no devuelve ningún valor) y un number (representa el tiempo mínimo entre ejecuciones)
// Esta devolverá otra función que tampoco acepta argumentos ni devuelve ningún valor
type throttleFunction = (func: () => void, delay: number) => () => void;

// Declaramos la función 'throttle' de tipo 'throttleFunction' que toma como parámetros una función 'func' y un number 'delay'
export const throttle: throttleFunction = (func, delay) => {
    // Declaramos la variable 'lastInvokeTime' que guarda el tiempo de la última invocación de la función
    let lastInvokeTime = 0;
    // Declaramos la variable 'timeoutId' que almacena el id del temporizador creado con 'setTimeout' y la inicializamos como 'null'
    let timeoutId: NodeJS.Timeout | null = null;

    // La función exterior devuelve una nueva función 'throttled'
    return () => {
        const now = Date.now(); // Declaramos una constante con el tiempo actual (número de milisegundos desde las 00:00:00 UTC del 1/1/1970)
        const elapsedTime = now - lastInvokeTime; // Declaramos una constante con el cálculo del tiempo transcurrido (elapsed time) desde la útlima invocación de la función

        if (!lastInvokeTime || elapsedTime >= delay) { // Si la función no se ha invocado antes o ha pasado el tiempo mínimo 'delay' desde la útlima invocación
            func(); // Se ejecuta la función inmediatamente
            lastInvokeTime = now;
        } else {
            if (timeoutId) { // Si hay una ejecución pendiente, la cancelamos para evitar múltiples ejecuciones
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => { // Se establece un nuevo temporizador para ejecutar la función después del tiempo restante para cumplir con el retraso
                func();
                lastInvokeTime = now; // Se actualiza 'lastInvokeTime' con el tiempo actual
            }, delay - elapsedTime);
        }
    };
};

// Esta implementación de throttle asegura que la función pasada como argumento (func) no se ejecute más a menudo que el intervalo de tiempo especificado (delay)
