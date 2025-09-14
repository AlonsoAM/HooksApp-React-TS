import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {Toaster} from 'sonner'
import "./index.css";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLightWithEffect";
// import {TrafficLightWithHook} from "./02-useEffect/TrafficLightWithHook.tsx";
// import {PokemonPage} from "./03-examples/PokemonPage.tsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.tsx";
// import {TasksApp} from "@/05-useReducer/TaskApp.tsx";
// import {ScrambleWords} from "@/05-useReducer/ScrambleWords.tsx";
// import {MemoHook} from "@/06-memos/MemoHook.tsx";
// import {MemoCounter} from "@/06-memos/MemoCounter.tsx";
// import {InstagromApp} from "@/07-useOptimistic/InstagromApp.tsx";
// import {ClientInformation} from "@/08-use-suspense/ClientInformation.tsx";
// import {getUserAction} from "@/08-use-suspense/api/get-user-action.ts";
// import { HooksApp } from "./HooksApp";

import {ProfessionalApp} from "@/09-useContext/ProfessionalApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors/>
    {/* <HooksApp /> */}
    {/*<Suspense fallback={(*/}
    {/*  <div*/}
    {/*    className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">*/}
    {/*    <div className="flex flex-col items-center space-y-8">*/}
    {/*      <h1 className={'text-white text-2xl font-thin'}>Cargando...</h1>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*)}>*/}
    {/*  <ClientInformation getUser={getUserAction(1001)}/>*/}
    {/*</Suspense>*/}
    <ProfessionalApp/>
  </StrictMode>
);
