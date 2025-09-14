# 🎣 React Hooks App

Una aplicación completa de React desarrollada con TypeScript, Vite y Tailwind CSS que demuestra el uso avanzado de React Hooks a través de ejemplos prácticos e interactivos.

## 🚀 Características

- **React 19** con TypeScript para desarrollo type-safe
- **Custom Hooks** reutilizables y optimizados
- **Tailwind CSS 4** para estilos modernos y responsive
- **Vite** como build tool para desarrollo ultrarrápido
- **ESLint** configurado con reglas específicas para React Hooks
- **Ejemplos prácticos** con casos de uso del mundo real
- **Componentes UI** con Shadcn/ui para interfaces modernas
- **Animaciones interactivas** con canvas-confetti
- **Gestión de estado compleja** con useReducer
- **Optimización de performance** con React.memo, useMemo y useCallback
- **Hooks experimentales de React 19** (useOptimistic, use)
- **Suspense moderno** para carga asíncrona de datos
- **Server Actions** y comunicación cliente-servidor

## 📦 Tecnologías

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Estilos**: Tailwind CSS 4
- **UI Components**: Shadcn/ui (Radix UI)
- **Animaciones**: Canvas Confetti
- **Icons**: Lucide React
- **Linting**: ESLint + TypeScript ESLint
- **Package Manager**: npm

## 🛠️ Instalación
```bash
  # Clonar el repositorio
  git clone <repository-url>
  cd 04-hooks-app

  # Instalar dependencias
  npm install

  # Ejecutar en desarrollo
  npm run dev
```

## 📜 Scripts Disponibles
```bash
  # Ejecuta el servidor de desarrollo
  npm run dev     
  
  # Construye la aplicación para producción 
  npm run build    
  
  # Previsualiza la build de producción
  npm run preview  
  
  # Ejecuta ESLint para revisar el código
  npm run lint     
```
## 🎯 Hooks Implementados

### `useState` Examples
- **TrafficLight**: Sistema de semáforos interactivo con estados

### `useEffect` Examples
- **TrafficLightWithEffect**: Semáforo automático usando efectos
- **TrafficLightWithHook**: Implementación optimizada con custom hook

### `useRef` Examples
- **FocusScreen**: Manejo del focus y referencias a elementos DOM

### `useReducer` Examples
- **TaskApp**: Aplicación de gestión de tareas con estados complejos
- **ScrambleWords**: Juego interactivo de palabras desordenadas con sistema de puntuación

### Optimización con Memos
- **React.memo**: Memorización de componentes para prevenir re-renders innecesarios
- **useMemo**: Memorización de cálculos costosos
- **useCallback**: Memorización de funciones para optimización de performance

### `useOptimistic` Examples (React 19)
- **Actualizaciones optimistas**: UI que responde inmediatamente a acciones del usuario
- **Estados transicionales**: Manejo de estados mientras se procesan operaciones asíncronas

### `use` Hook + Suspense (React 19)
- **ClientInformation**: Componente que demuestra el nuevo hook `use` con Suspense
- **Carga asíncrona**: Manejo moderno de promesas y recursos asíncronos
- **API integrations**: Conexión con servicios externos usando patrones modernos

### `useContext` Examples
- **ProfessionalApp**: Sistema completo de gestión empresarial con contexto global
- **Autenticación y autorización**: Sistema de login con rutas privadas
- **Estado global compartido**: Manejo de estado de usuario entre componentes
- **Context Provider**: Proveedor de contexto reutilizable para toda la aplicación
- **Enrutamiento avanzado**: Protección de rutas basada en autenticación
- **Navegación dinámica**: Sistema de navegación que responde al estado del usuario

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
├── 01-useState/                    # Ejemplos de useState
│   └── TrafficLight.tsx                # Sistema de semáforos básico
├── 02-useEffect/                   # Ejemplos de useEffect  
│   ├── TrafficLightWithEffect.tsx      # Semáforo automático
│   └── TrafficLightWithHook.tsx        # Semáforo con custom hook
├── 03-examples/                    # Ejemplos complejos
│   └── PokemonPage.tsx                 # Página de Pokémon con API
├── 04-useRef/                      # Ejemplos de useRef
│   └── FocusScreen.tsx                 # Manejo de focus y referencias DOM
├── 05-useReducer/                  # Ejemplos de useReducer
│   ├── reducer/                        # Reducers reutilizables
│   │   ├── scrambleReducer.ts              # Lógica del juego de palabras
│   │   └── tasksReducer.ts                 # Lógica de gestión de tareas
│   ├── ScrambleWords.tsx               # Juego de palabras desordenadas
│   └── TaskApp.tsx                     # Aplicación de gestión de tareas
├── 06-memos/                       # Ejemplos de optimización con memos
│   └── [Componentes de memorización]       # React.memo, useMemo, useCallback
├── 07-useOptimistic/               # Ejemplos de useOptimistic (React 19)
│   └── [Componentes optimistas]            # Actualizaciones optimistas de UI
├── 08-use-suspense/                # Ejemplos de use + Suspense (React 19)
│   ├── api/                            # Servicios y acciones del servidor
│   │   └── get-user-action.ts              # Action para obtener datos de usuario
│   └── ClientInformation.tsx           # Componente con hook use y Suspense
├── 09-useContext/                  # Ejemplos de useContext y estado global
│   ├── context/                        # Contextos de la aplicación
│   │   └── [Context providers]             # Proveedores de contexto global
│   ├── data/                           # Datos mock y configuraciones
│   │   └── [Mock data]                     # Datos de prueba para la aplicación
│   ├── pages/                          # Páginas de la aplicación profesional
│   │   └── [App pages]                     # Componentes de página
│   ├── router/                         # Sistema de enrutamiento
│   │   ├── app.router.tsx                  # Configuración principal del router
│   │   └── PrivateRoute.tsx                # Componente para rutas privadas
│   └── ProfessionalApp.tsx             # Aplicación empresarial completa
├── components/                     # Componentes UI reutilizables
│   └── ui/                             # Componentes Shadcn/ui
│       ├── button.tsx                      # Componente Button
│       ├── card.tsx                        # Componente Card
│       ├── checkbox.tsx                    # Componente Checkbox  
│       └── input.tsx                       # Componente Input
├── hooks/                          # Custom hooks reutilizables
│   ├── useCounter.tsx                  # Hook para contadores
│   ├── usePokemon.tsx                  # Hook para API de Pokémon
│   └── useTrafficLight.tsx             # Hook para semáforos
├── lib/                            # Utilidades y configuraciones
│   └── utils.ts                        # Funciones de utilidad (cn, clsx)
├── HooksApp.tsx                # Componente principal de la aplicación
├── index.css                   # Estilos globales y Tailwind
├── main.tsx                    # Punto de entrada de React
└── vite-env.d.ts               # Definiciones de tipos para Vite
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

### Juego de Palabras Desordenadas (ScrambleWords)
Ejemplo avanzado que implementa un juego completo con:
- **Gestión de estado compleja** usando `useReducer`
- **Sistema de puntuación** con límites de errores y saltos
- **Animaciones de confetti** cuando se adivina correctamente
- **Interfaz responsive** con gradientes y animaciones CSS
- **17 palabras de tecnología** para adivinar
- **Funciones puras** en el reducer para lógica de juego
- **Componentes UI modernos** con Shadcn/ui

Características del juego:
- ✨ Efectos de confetti al acertar una palabra
- 🎯 Sistema de puntos (máximo 17)
- ❌ Máximo 3 errores permitidos
- ⏭️ Máximo 3 saltos disponibles
- 🔄 Palabras aleatorias en cada partida
- 🎨 Interfaz moderna con gradientes
- 📱 Completamente responsive

### Sistema Empresarial Profesional (ProfessionalApp)
Implementación completa de una aplicación empresarial que demuestra:
- **Contexto Global de Usuario**: Manejo centralizado del estado de autenticación
- **Enrutamiento Privado**: Protección automática de rutas basada en autenticación
- **Dashboard Empresarial**: Panel de control con métricas y datos de negocio
- **Gestión de Sesiones**: Login, logout y persistencia de estado
- **Navegación Condicional**: Menús y opciones que cambian según el usuario
- **Arquitectura Escalable**: Patrón de contexto para aplicaciones grandes
- **Separación de Responsabilidades**: Contextos especializados por funcionalidad

Características del sistema:
- 🔐 **Sistema de autenticación completo**
- 🛡️ **Rutas protegidas automáticamente**
- 📊 **Dashboard con métricas empresariales**
- 👤 **Gestión de perfiles de usuario**
- 🎯 **Estado global reactivo**
- 🔄 **Navegación dinámica**
- 📱 **Interfaz responsive empresarial**

### Funcionalidades de React 19

#### Hook `useOptimistic`
Permite crear interfaces optimistas que actualizan inmediatamente la UI mientras se procesan operaciones en segundo plano:
- Mejora la percepción de velocidad de la aplicación
- Manejo elegante de estados de carga
- Rollback automático en caso de errores

#### Hook `use` + Suspense
Nueva forma de manejar promesas y recursos asíncronos:
- Sintaxis más limpia para operaciones asíncronas
- Integración nativa con Suspense
- Mejor experiencia de desarrollador

#### Optimización de Performance
Técnicas avanzadas implementadas:
- **React.memo**: Prevención de re-renders innecesarios
- **useMemo**: Memorización de cálculos costosos
- **useCallback**: Estabilización de referencias de funciones
- Patrones de optimización en aplicaciones reales

## 📚 Aprendizaje

Este proyecto es ideal para:
- Aprender React Hooks desde lo básico hasta lo avanzado
- Entender patrones de custom hooks
- Practicar TypeScript con React
- Explorar técnicas de optimización de performance avanzadas
- Dominar `useReducer` para estados complejos
- Implementar juegos interactivos con React
- Trabajar con animaciones y efectos visuales
- Crear interfaces modernas con Tailwind CSS y Shadcn/ui
- **Experimentar con React 19**: useOptimistic, use hook, Suspense moderno
- **Optimización de renders**: React.memo, useMemo, useCallback
- **Patrones asíncronos modernos**: Server Actions y comunicación cliente-servidor
- **UX optimista**: Interfaces que responden inmediatamente a las acciones del usuario
- **Gestión de estado global**: useContext para aplicaciones complejas
- **Arquitectura empresarial**: Patrones de contexto para sistemas escalables
- **Autenticación y autorización**: Sistemas de login con rutas protegidas
- **Enrutamiento avanzado**: React Router con protección condicional

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


---

⭐ Si este proyecto te ayuda a aprender React Hooks, ¡no olvides darle una estrella!
