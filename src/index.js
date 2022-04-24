import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.page";
import "./assets/styles/global.scss";
import { createStoreHook, Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>
    </React.StrictMode>
);
