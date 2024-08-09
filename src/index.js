import React from "react";
import Reactdom from "react-dom/client";
import App from "./App";

const el = document.querySelector("#root");
const root = Reactdom.createRoot(el);

root.render(<App />);
