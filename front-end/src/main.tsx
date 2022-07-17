import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { toast } from "react-toastify";
import App from "./App";
import "./main.css";
import store from "./store/store";

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: "top-right",
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnHover: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
