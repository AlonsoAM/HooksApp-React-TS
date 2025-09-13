import {useCounter} from "@/hooks/useCounter.tsx";
import {useMemo} from "react";

const heavyStuff = (iterationumber: number) => {
  console.time('Heavy_Stuff_Started')

  for (let i = 0; i < iterationumber; i++) {
    console.log('Ahí vamos!')
  }

  console.timeEnd('Heavy_Stuff_Started')

  return `${iterationumber} iteraciones realizadas`

}

export const MemoCounter = () => {

  const {counter, increment} = useCounter(100)
  const {counter:counter2, increment:increment2} = useCounter(10)

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div className={'bg-gradient flex flex-col gap-4'}>
      <h1 className={'text-2xl text-white font-bold'}>Memo - useMemo - {myHeavyValue}</h1>
      <hr/>
      <h4>
        Counter:  {counter}
      </h4>
      <h4>
        Counter2:  {counter2}
      </h4>

      <button onClick={increment}
              className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}>
        +1
      </button>
      <button onClick={increment2}
              className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}>
        +1 Counter 2
      </button>
    </div>


  )
}
