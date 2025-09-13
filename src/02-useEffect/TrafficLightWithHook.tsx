import {useTrafficLight} from "../hooks/useTrafficLight.tsx";


const commonStyles = "w-32 h-32 rounded-full"

export const TrafficLightWithHook = () => {

  const {countDown, percentage, redLight, greenLight, yellowLight} = useTrafficLight()

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className={'text-white text-2xl font-thin'}>Semáforo con UseEffect</h1>
        <h2 className={'text-white text-xl'}> CountDown {countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 easlinear"
               style={{
                 width: `${percentage}%`,
               }}></div>
        </div>

        <div className={`${commonStyles} ${redLight}`}></div>
        <div className={`${commonStyles} ${yellowLight}`}></div>
        <div className={`${commonStyles} ${greenLight}`}></div>
      </div>
    </div>
  );
};
