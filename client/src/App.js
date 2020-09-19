import React from "react";

import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import NavBarComp from "./components/NavBarComp";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import "./App.css";

function App() {
  return (
    <div>
      <header className="tc">
        <HeaderComp />
        <NavBarComp />
      </header>
      <br /><br />
      <body className="tc">
        <AboutPage />
        <HomePage />
        <ProjectsPage />
      </body>
      <br /><br />
      <footer className="tc">
        <FooterComp />
      </footer>
    </div>
  );
}

export default App;
