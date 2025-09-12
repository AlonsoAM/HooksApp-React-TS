# 🎣 React Hooks App

Una aplicación completa de React desarrollada con TypeScript, Vite y Tailwind CSS que demuestra el uso avanzado de React Hooks a través de ejemplos prácticos e interactivos.

## 🚀 Características

- **React 19** con TypeScript para desarrollo type-safe
- **Custom Hooks** reutilizables y optimizados
- **Tailwind CSS 4** para estilos modernos y responsive
- **Vite** como build tool para desarrollo ultrarrápido
- **ESLint** configurado con reglas específicas para React Hooks
- **Ejemplos prácticos** con casos de uso del mundo real

## 📦 Tecnologías

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Estilos**: Tailwind CSS 4
- **Linting**: ESLint + TypeScript ESLint
- **Package Manager**: npm

## 🛠️ Instalación
```
bash
# Clonar el repositorio
git clone <repository-url>
cd 04-hooks-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```
## 📜 Scripts Disponibles
```
bash
npm run dev      # Ejecuta el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta ESLint para revisar el código
```
## 🎯 Hooks Implementados

### `useState` Examples
- **TrafficLight**: Sistema de semáforos interactivo con estados

### `useEffect` Examples
- **TrafficLightWithEffect**: Semáforo automático usando efectos
- **TrafficLightWithHook**: Implementación optimizada con custom hook

### `useRef` Examples
- **FocusScreen**: Manejo del focus y referencias a elementos DOM

### Custom Hooks

#### `useCounter`
Hook personalizado para manejar contadores con incremento y decremento controlado.
```typescript
const { counter, increment, decrement } = useCounter(initialValue);
```

#### `usePokemon`
Hook para obtener información de Pokémon desde la PokéAPI con manejo de estados de carga.

```typescript
const { pokemon, isLoading, formatedId } = usePokemon({ id });
```

#### `useTrafficLight`
Hook personalizado para manejar la lógica de un sistema de semáforos.

```typescript
const { currentLight, nextLight } = useTrafficLight();
```


## 🏗️ Estructura del Proyecto

```
src/
├── 01-useState/          # Ejemplos de useState
├── 02-useEffect/         # Ejemplos de useEffect  
├── 03-examples/          # Ejemplos complejos (PokemonPage)
├── 04-useRef/            # Ejemplos de useRef
├── hooks/                # Custom hooks reutilizables
│   ├── useCounter.tsx
│   ├── usePokemon.tsx
│   └── useTrafficLight.tsx
├── HooksApp.tsx          # Componente principal
└── main.tsx              # Punto de entrada
```


## 🎨 Características Técnicas

### Type Safety
- Interfaces TypeScript bien definidas
- Tipado estricto en todos los hooks
- IntelliSense completo para mejor DX

### Performance
- Optimizaciones con `useEffect` y dependencias
- Lazy loading de componentes
- Memoización donde es necesario

### Arquitectura
- Separación de concerns con custom hooks
- Componentes reutilizables
- Patrón de diseño modular

## 🔧 Configuración de Desarrollo

### ESLint
El proyecto incluye configuración avanzada de ESLint con:
- Reglas específicas para React Hooks
- TypeScript strict mode
- Detección automática de problemas comunes

### Tailwind CSS
Configurado con la nueva versión 4, incluye:
- Sistema de diseño consistente
- Utilidades responsivas
- Gradientes y animaciones personalizadas

## 🚀 Casos de Uso

### Página de Pokémon
Ejemplo complejo que combina múltiples hooks:
- `useCounter` para navegación entre Pokémon
- `usePokemon` para obtener datos de la API
- Manejo de estados de carga y error
- Interfaz responsive con Tailwind CSS

### Sistema de Semáforos
Implementaciones múltiples demostrando:
- Estados simples con `useState`
- Efectos automáticos con `useEffect`
- Lógica reutilizable con custom hooks

## 📚 Aprendizaje

Este proyecto es ideal para:
- Aprender React Hooks desde lo básico hasta lo avanzado
- Entender patrones de custom hooks
- Practicar TypeScript con React
- Explorar técnicas de optimización de performance

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


---

⭐ Si este proyecto te ayuda a aprender React Hooks, ¡no olvides darle una estrella!
