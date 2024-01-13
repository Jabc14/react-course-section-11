import React from "react";
import ReactDOM from "react-dom/client";
import { CallbackHook } from "./06-useMemo/CallbackHook";
// import { CounterApp } from './01-useState/CounterApp';
// import CustomHooks from './01-useState/CustomHooks';
// import SimpleForm from './02-useEffect/SimpleForm';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from "./06-useMemo/memoHook";
// import { App } from './App';
// import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./08-useReducer/TodoApp";

// import "./08-useReducer/intro-reducer";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //  <CounterApp />
  <TodoApp />

  // </React.StrictMode>,
);
