import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";




const firebaseConfig = {
  apiKey: "AIzaSyBJAHWfmOyikNspLqu-aT6ZIBEH1aNLPxY",
  authDomain: "ecommerce-ee72f.firebaseapp.com",
  projectId: "ecommerce-ee72f",
  storageBucket: "ecommerce-ee72f.appspot.com",
  messagingSenderId: "258548324693",
  appId: "1:258548324693:web:b294eec2b1575e325937dc"
};

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();