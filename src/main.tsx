import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLightWithEffect";
import {TrafficLightWithHook} from "./02-useEffect/TrafficLightWithHook.tsx";
// import { HooksApp } from "./HooksApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLightWithHook />
  </StrictMode>
);
