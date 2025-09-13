import {useState, useEffect} from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
}

type Color = keyof typeof colors

const defaultColor = "bg-gray-500"


export const useTrafficLight = () => {

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

  return {
    // Properties
    countDown,

    // Computed Properties
    percentage: `${(countDown / 5) * 100}%`,
    greenLight: light === "green" ? colors[light] : defaultColor,
    yellowLight: light === "yellow" ? colors[light] : defaultColor,
    redLight: light === "red" ? colors[light] : defaultColor

    // Methods
  }
}
