import React from "react";
import NavBar from "./NavBar";
import "../Styles/Layout.css";

export const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
      <footer className="footer">copy right (2020)</footer>
    </main>
  );
};
