import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./hello";

const elem = document.getElementById("root");
console.log("elem", elem);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    elem
);