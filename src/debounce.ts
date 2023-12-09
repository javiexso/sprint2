// Exportamos la función 'debounce' para que sea accesible en otros archivos
// Toma dos parámetros, 'func' (función que queremos debouncar) y 'delay' (tiempo de espera en ms) y devuelve otra función
export function debounce(func: () => void, delay: number): () => void {
    // Declaramos la variable 'timeoutId' para almacenar el id del temporizador
    let timeoutId: NodeJS.Timeout;

    return () => { // Devolvemos una arrow function con la función debouncada
        clearTimeout(timeoutId); // Cancelamos el temporizador existente si la función debouncada se llama antes de que expire el tiempo de espera
        timeoutId = setTimeout(func, delay); // Configuramos un nuevo temporizador para llamar a la función original después del tiempo de espera especificado
    };
}