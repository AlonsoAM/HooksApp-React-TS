import {useState, useEffect} from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
}

type Color = keyof typeof colors

const defaultColor = "bg-gray-500"
const commonStyles = "w-32 h-32 rounded-full"

export const TrafficLightWithEffect = () => {
  const [light, setLight] = useState<Color>("red")
  const [countDown, setCountDown] = useState(5)

  // CountDown Effect
  useEffect(() => {

    if (countDown === 0) return

    const intervalId = setInterval(() => {
      setCountDown(countDown - 1)
    }, 1000)


    return () => {
      console.log("Componente se desmontó")
      clearInterval(intervalId)
    }

  }, [countDown]);

  // Change Light Effect
  useEffect(() => {

    if (countDown > 0) return;

    setCountDown(5)

    if (light === "red") {
      setLight("green")
    } else if (light === "yellow") {
      setLight("red")
    } else {
      setLight("yellow")
    }
    return

  }, [light, countDown])

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className={'text-white text-2xl font-thin'}>Semáforo con UseEffect</h1>
        <h2 className={'text-white text-xl'}> CountDown {countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 easlinear"
          style={{
            width: `${(countDown / 5) * 100}%`,
          }}></div>
        </div>

        <div className={`${commonStyles} ${light === 'red' ? colors[light] : defaultColor}`}></div>
        <div className={`${commonStyles} ${light === 'yellow' ? colors[light] : defaultColor}`}></div>
        <div className={`${commonStyles} ${light === 'green' ? colors[light] : defaultColor}`}></div>
      </div>
    </div>
  );
};
