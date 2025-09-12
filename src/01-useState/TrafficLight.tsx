import {useState} from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
}

const defaultColor = "bg-gray-500"
const commonStyles = "w-32 h-32 rounded-full"

export const TrafficLight = () => {
  const [light, setLight] = useState("")

  const handleClick = (color: string) => setLight(color)

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div className={`${commonStyles} ${light === 'red' ? colors[light] : defaultColor}`}></div>
        <div className={`${commonStyles} ${light === 'yellow' ? colors[light] : defaultColor}`}></div>
        <div className={`${commonStyles} ${light === 'green' ? colors[light] : defaultColor}`}></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  onClick={() => handleClick("red")}>
            Rojo
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  onClick={() => handleClick("yellow")}>
            Amarillo
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  onClick={() => handleClick("green")}>
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
