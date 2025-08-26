import "../style/style.css";
import "../style/base.scss";
import * as bootrap from "bootstrap";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app";

const content = document.getElementById("content");
const root = createRoot(content);

root.render(<App />);
