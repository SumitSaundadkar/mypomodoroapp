import React from "react";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Context/StateProvideContext";
import { TodoProvider } from "./Context/TodoProvider";

// Call make Server
makeServer();
createRoot.render(
  <React.StrictMode>
    <TodoProvider>
      <StateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StateProvider>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
