import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./Route/Route";
import UserProvider from "./Context/UserProvider";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={myRouter}></RouterProvider>
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
