import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router";
import {type FormEvent, useContext, useState} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";
import {toast} from "sonner";

export const LoginPage = () => {
  
  const { login } = useContext(UserContext)

  const [userId, setUserId] = useState('')

  const navigation = useNavigate()


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const result = login(+userId)

    console.log(result)

    if (!result) {
      toast.error('Usuario no encontrado')
      return
    }

    navigation('/profile')
  }

  return (
    <div className={'flex flex-col items-center justify-center min-h-screen'}>
      <h1 className={'text-4xl font-bold'}>Iniciar Sesión</h1>
      <hr/>
      <form className={'flex flex-col gap-2 my-10'}
            onSubmit={handleSubmit}>
        <Input
          type={'number'}
          placeholder={'Id de usuario'}
          className={'mt-4'}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button type={'submit'}
                className={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'}
        >
          Login
        </Button>
      </form>
      <Link to={'/'}>
        <Button variant={'ghost'}>
          Volver a la página principal
        </Button>
      </Link>
    </div>
  )
}
