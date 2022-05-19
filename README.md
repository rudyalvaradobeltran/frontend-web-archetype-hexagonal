# Coopeuch frontend Archetype
---

## Stack

- **React**: Framework principal para crear UI.
- **React Router** Librería navegación en base a componentes declarativos.
- **React Redux**: Implementación de Redux para React.
- **Redux Toolkit**: Una serie de funciones que ayudan a construir y manjer redux.
- **Redux Saga**: Aplicación que ayuda a manegar efectos secundarios como petificones asíncronas de una forma más fácil.
- **Styled Components**: Utilizar lo mejor de CSS y JS para dar estilos a los componentes.
- **Immer**: Crear estados immutables con JS puro.
- **Enzyme**: Herramienta para testear componentes de React.
- **Jest**: JavaScript test framework.

## Estructura del proyecto

El proyecto toma como conceptos para su estructura un patrón de diseño y una arquitectura.

Para el poyecto en general utiliza conceptos de la arquitectura Hexagonal y para la estructura de los componentes se utiliza el patrón de diseño atómico.

### Components `(carpeta /src/ui/components/)`

La carpeta *components* tiene una estructura basada en el patrón de diseño atómico

Ejemplo:

```
components
|-atoms
| |-Input
| | |-index.js
| |-Label
| | |-index.js
|-molecules
| |-InputLabel
| | |-index.js
|-organism
| |-LoginForm
| | |-index.js
|-templates
| |-LoginTemplate // Contains everything from below but related to a CONTAINER
| | |-index.js
```

### Containers `(carpeta /src/ui/containers/)`

Los contenedores pueden tener uno o múltiples templates.

Recordar que los **templates** son sólo componentes sin **lógica**.

Solo los containers tienen lógica. Tratar que un container no tenga mucha lógica de componentes que no corresponda, así evitar reenderizados innecesarios.

### Pages `(carpeta /src/ui/page/)`

Una página corresponde a una página que estamos visitando en el sitio, por lo tanto puede o no tener lógica ya que contiene uno o más containers. Solo puede contener containers. De tener lógica que no sea mucha y que sea *global* para los containers.

## Scripts

### Correr aplicación de ejemplo

Instalar dependencias:
```bash
npm i
```

En un terminal correr:
```bash
npm run mock
```

En paralelo, en otro terminal correr:
```bash
npm start
```

### Generar reporte de cobertura de tests

```bash
npm run coverage
```

### Correr un test en particular
```bash
npm run test [nombre-archivo].test
```

---

## Consideraciones

La capa de api está adaptada para recibir respuesta del backend del tipo:

Petición correcta:

```json
{
  "data": {...}
}
```

Petición con error:

```json
{
  "error": {...}
}
```
