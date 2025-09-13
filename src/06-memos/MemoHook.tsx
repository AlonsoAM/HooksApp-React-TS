import {MyTitle} from "@/06-memos/ui/MyTitle.tsx";
import {useCallback, useState} from "react";
import {MySubtitle} from "@/06-memos/ui/MySubtitle.tsx";

export const MemoHook = () => {

  const [title, setTitle] = useState('Hola')
  const [subTitle, setSubTitle] = useState('Mundo');

  const handleMyApiCall = useCallback(() => {
      console.log('Llamando a mi función', subTitle)
    }, [subTitle])

  return (
    <div className={'bg-gradient flex flex-col gap-4'}>
      <h1 className={'text-2xl font-thin text-white'}>Memo App</h1>

      <MyTitle title={title}/>

      <MySubtitle subtitle={subTitle} callMyApi={handleMyApiCall}/>

      <button
        onClick={() => setTitle('Adiós, ' + new Date().toLocaleTimeString())}
        className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}>
        Cambiar Título
      </button>

      <button
        onClick={() => setSubTitle('World')}
        className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}>
        Cambiar Subtítulo
      </button>

    </div>
  )
}
