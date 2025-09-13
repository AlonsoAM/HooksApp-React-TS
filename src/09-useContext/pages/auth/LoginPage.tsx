import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";

export const LoginPage = () => {
  return (
    <div className={'flex flex-col items-center justify-center min-h-screen'}>
      <h1 className={'text-4xl font-bold'}>Iniciar Sesión</h1>
      <hr/>
      <form className={'flex flex-col gap-2 my-10'}
            onSubmit={(e) => e.preventDefault()}>
        <Input
          type={'number'}
          placeholder={'Id de usuario'}
          className={'mt-4'}
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
