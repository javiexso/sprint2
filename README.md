# sprint2
Repositorio para el sprint2

---

Función debounce y CLI que comrpueba su funcionalidad.

Para este proyecto he usado:
- ts-jest
- readlineSync

## Comandos

Testing:

```sh
npm run test
```

Ejecuta los tests utilizando Jest e ignorando los que existan en dist/

Dev Run:

```sh
npm run dev:run
```

Ejecuta el proyecto sin watcher

Build:

```sh
npm run build
```

Transpila el proyecto en dist/

## Ejemplos de Uso

- **Llamar a la Función Debouncada:**

  ```sh
  npm run dev:run
  ```

- **Configurar el Tiempo de debounce:**
  ```sh
  npm run dev:run 2000
  ```

---

## Debugger

en el archivo .vscode/launch.json está la configuración del debugger.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Lanza debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```
