import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import NavBarComp from './components/NavBarComp';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import UserProfile from './pages/UserProfilePage';
import PricingPage from './pages/PricingPage';
import TermAndConditionsPage from './pages/TermAndConditionsPage';

import './App.css';

function App() {
  return (
    <div>
      <header className="tc">
        <HeaderComp />
        <NavBarComp />
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/userprofilepage">
          <UserProfile />
        </Route>
        <Route path="/aboutpage">
          <AboutPage />
        </Route>
        <Route path="/pricingpage">
          <PricingPage />
        </Route>
        <Route path="/projectspage">
          <ProjectsPage />
        </Route>
        <Route path="/termandconditionspage">
          <TermAndConditionsPage />
        </Route>
      </Switch>
      <footer>
        <FooterComp />
      </footer>
    </div>
  );
}

export default App;
