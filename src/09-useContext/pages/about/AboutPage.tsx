import {Link} from "react-router";
import {use} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";
import {Button} from "@/components/ui/button.tsx";


export const AboutPage = () => {

  const {isAuthenticated, logout} = use(UserContext)

  return (
    <div className={'flex flex-col items-center justify-center min-h-screen'}>
      <h1 className={'text-4xl font-bold'}>Página sobre mí</h1>
      <hr/>
      <div className={'flex flex-col gap-2 mt-4'}>
        {/*Peril de usuario si tiene sesión*/}
        {
          isAuthenticated && (
            <Link to={'/profile'}
                  className={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'}>
              Ir a mi perfil
            </Link>
          )
        }

        {/*Login - Logout*/}
        {
          isAuthenticated ? (
              <Button
                onClick={logout}
                variant={'destructive'}>
                Salir
              </Button>
            )
            : (
              <Link to={'/login'}
                    className={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'}>
                Iniciar Sesión
              </Link>
            )
        }

      </div>
    </div>
  )
}
