import "./assets/styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position={"bottom-center"}
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "var(--gray-700)",
            color: "var(--white)",
            padding: "20px",
          },
          duration: 2000,
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
