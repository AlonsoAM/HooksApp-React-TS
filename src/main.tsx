import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLightWithEffect";
// import {TrafficLightWithHook} from "./02-useEffect/TrafficLightWithHook.tsx";
// import {PokemonPage} from "./03-examples/PokemonPage.tsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.tsx";
import {TasksApp} from "@/05-useReducer/TaskApp.tsx";
// import { HooksApp } from "./HooksApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TasksApp />
  </StrictMode>
);
