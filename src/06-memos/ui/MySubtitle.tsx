import React from "react";

interface Props {
  subtitle: string
  callMyApi: () => void
}

export const MySubtitle = React.memo(({subtitle, callMyApi}: Props) => {

  console.log('My subtitle re-render')

  return (
    <>
      <h6 className={'text-2xl font-bold'}>{subtitle}</h6>
      <button
        onClick={callMyApi}
        className={'bg-indigo-500 text-white px-2 py-1 cursor-pointer rounded-md'}>
        Llamar a función
      </button>
    </>
  )
})
