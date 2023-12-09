const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce((text) => {
    debounceText.textContent = text
// const updateDebounceText = debounce(() => {
//     incrementCount(debounceText)
})
const updateThrottleText = throttle((text) => {
    throttleText.textContent = text
// const updateThrottleText = throttle(() => {
//     incrementCount(throttleText)
})

// Eliminar esta sección para el ejemplo de seguimiento del movimiento del mouse
input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)
})

function debounce(callback, delay = 1000) {
    let timeout // Variable que almacena el id del timeout

    return (...args) => { // Devuelve cualquier cantidad de argumentos '...args'
        clearTimeout(timeout) // Cancela el timeout existente cada vez que se llama a la función
        timeout = setTimeout(() => { // Configuramos el temporizador...
            callback(...args) // que llamará a nuestro callback junto con los argumentos...
        }, delay) // y le especificamos el tiempo de retraso
    }
}

function throttle(callback, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs == null) { // Si no tenemos nada esperando a que suceda, podemos establecer 'shouldWait' en 'false', entonces esperará hasta la siguiente respuesta antes de que algo suceda
            shouldWait = false
        } else { // Si tenemos 'waitingArgs'
            callback(...waitingArgs) // llamamos a la función después del 'delay' con los 'waitingArgs'
            waitingArgs = null // Establecemos 'waitingArgs' a 'null' de esa manera ya no guardamos esa información
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if(shouldWait) { // Si estamos dentro del tiempo de espera será 'true', lo que significa que no llama a la función
            waitingArgs = args // Cada vez que estamos en la etapa de espera guardamos lo que fue la última llamada a la función
            return
        }

        callback(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)

    }
}

// Example of track the mouse movement
// document.addEventListener("mousemove", e => {
//     incrementCount(defaultText)
//     updateDebounceText()
//     updateThrottleText()
// })

// function incrementCount(element) { // Función que le pasamos un 'element' e incrementa el contador y retorna cuántas veces han sido llamados los elementos con id 'default', 'debounce' y 'throttle'
//     element.textContent = (parseInt(element.innerText) || 0) + 1
// }