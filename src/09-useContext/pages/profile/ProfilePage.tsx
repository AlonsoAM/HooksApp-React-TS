import {Button} from "@/components/ui/button.tsx";
import {use} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";

export const ProfilePage = () => {

  const { user, logout } = use(UserContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={'flex flex-col items-center justify-center min-h-screen'}>
      <h1 className={'text-4xl font-bold'}>Peril del Usuario</h1>
      <hr/>
      <pre className={'bg-gray-800 text-white p-4 rounded-md mt-4'}
           style={{maxWidth: '800px', overflowX: 'auto'}}>
        {JSON.stringify(user, null, 2)}
      </pre>
      <Button variant={'destructive'}
              onClick={handleLogout}
              className={'mt-4'}>
        Salir
      </Button>
    </div>
  )
}
