import React from "react";
import NavBar from "./NavBar";
import "../Styles/Layout.css";
import Fondo from "../assets/Fondo.png"

export const Layout = ({ children }) => {
  return (
    <main
    style={{ backgroundImage: `url(${Fondo})`}}
    >
      <NavBar />
      {children}
      <footer className="footer">copy right (2020)</footer>
    </main>
  );
};
