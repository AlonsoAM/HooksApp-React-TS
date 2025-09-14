import {createContext, type PropsWithChildren, useEffect, useState} from "react";
import {type User, users} from "@/09-useContext/data/user-mock.data.ts";

/**
 * CONTEXTO DE USUARIO - PASO A PASO
 * ===================================
 * 
 * Este archivo implementa un contexto de React para manejar la autenticación de usuarios.
 * El flujo de funcionamiento es el siguiente:
 * 
 * 1. Al inicializar, verifica si hay un userId guardado en localStorage
 * 2. Si existe, intenta hacer login automático con ese usuario
 * 3. Si no existe, establece el estado como 'not-authenticated'
 * 4. Proporciona métodos para login y logout que actualizan tanto el estado como localStorage
 * 5. Mantiene sincronizado el estado de autenticación en toda la aplicación
 */

/**
 * Estados posibles de autenticación:
 * - 'checking': Estado inicial mientras se verifica si hay una sesión guardada
 * - 'authenticated': Usuario ha hecho login correctamente
 * - 'not-authenticated': Usuario no está autenticado o ha hecho logout
 */
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

/**
 * Interface que define la estructura del contexto de usuario
 * Contiene tanto el estado actual como los métodos para modificarlo
 */
interface UserContextProps {
  // === ESTADO ===
  authStatus: AuthStatus           // Estado actual de la autenticación
  user: User | null               // Datos del usuario autenticado (null si no hay usuario)
  isAuthenticated: boolean        // Boolean derivado: true si authStatus === 'authenticated'

  // === MÉTODOS ===
  login: (userId: number) => boolean  // Función para hacer login, retorna true si es exitoso
  logout: () => void                  // Función para hacer logout
}

/**
 * PASO 1: CREACIÓN DEL CONTEXTO
 * ==============================
 * Se crea el contexto con un valor por defecto vacío
 * Este contexto será consumido por los componentes hijos
 */
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext =
  createContext<UserContextProps>({} as UserContextProps)

/**
 * PASO 2: PROVIDER DEL CONTEXTO (HOC - Higher Order Component)
 * ============================================================
 * Este componente envuelve a otros componentes y les proporciona acceso al contexto de usuario
 */
export const UserContextProvider =
  ({children}: PropsWithChildren) => {

    /**
     * PASO 3: ESTADO LOCAL DEL PROVIDER
     * ==================================
     * Se inicializa con 'checking' porque al cargar la app necesitamos verificar
     * si hay una sesión guardada en localStorage
     */
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)

    /**
     * PASO 4: FUNCIÓN DE LOGIN
     * ========================
     * Proceso de autenticación paso a paso:
     */
    const handleLogin = (userId: number) => {
      // 4.1: Buscar el usuario en los datos mock
      const user = users.find(user => user.id === userId)

      // 4.2: Si no existe el usuario, fallar el login
      if (!user){
        console.log(`User not found ${userId}`)
        setAuthStatus('not-authenticated')
        setUser(null)
        return false  // Indica que el login falló
      }

      // 4.3: Si el usuario existe, establecer como autenticado
      setUser(user)                                      // Guardar datos del usuario
      setAuthStatus('authenticated')                     // Cambiar estado a autenticado
      localStorage.setItem('userId', userId.toString())  // Persistir en localStorage
      return true  // Indica que el login fue exitoso
    }

    /**
     * PASO 5: FUNCIÓN DE LOGOUT
     * =========================
     * Proceso de cierre de sesión paso a paso:
     */
    const handleLogout = () => {
      console.log('Logout')
      setAuthStatus('not-authenticated')     // 5.1: Cambiar estado a no autenticado
      setUser(null)                         // 5.2: Limpiar datos del usuario
      localStorage.removeItem('userId')     // 5.3: Eliminar sesión de localStorage
    }

    /**
     * PASO 6: INICIALIZACIÓN AL MONTAR EL COMPONENTE
     * ==============================================
     * Este useEffect se ejecuta una sola vez al montar el componente
     * Su propósito es verificar si hay una sesión guardada
     */
    useEffect(() => {
      // 6.1: Verificar si hay un userId guardado en localStorage
      const storedUserId = localStorage.getItem('userId')

      // 6.2: Si existe un userId guardado, intentar hacer login automático
      if (storedUserId) {
        const userId = +storedUserId  // Convertir string a number
        handleLogin(userId)           // Llamar a handleLogin con el userId guardado
        return                        // Salir temprano si hay sesión guardada
      }

      // 6.3: Si no hay sesión guardada, hacer logout (limpiar estado)
      handleLogout()
    }, []); // Array vacío = se ejecuta solo una vez al montar

    /**
     * PASO 7: PROPORCIONAR EL CONTEXTO A LOS COMPONENTES HIJOS
     * ========================================================
     * El Provider envuelve a los componentes hijos y les da acceso a:
     */
    return (
      <UserContext.Provider
        value={{
          // Estado actual
          authStatus: authStatus,                              // Estado de autenticación
          isAuthenticated: authStatus === 'authenticated',     // Boolean derivado
          user: user,                                          // Datos del usuario

          // Métodos para cambiar el estado
          login: handleLogin,    // Función para hacer login
          logout: handleLogout   // Función para hacer logout
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }

/**
 * CÓMO USAR ESTE CONTEXTO:
 * ========================
 * 
 * 1. Envolver tu aplicación con <UserContextProvider>
 * 2. En cualquier componente hijo, usar: const { user, login, logout } = useContext(UserContext)
 * 3. Llamar login(userId) para autenticar
 * 4. Llamar logout() para cerrar sesión
 * 5. Verificar isAuthenticated para mostrar contenido condicional
 */
