import React, { useState } from 'react';
import './App.css';
import HackerNewsSearch from './HackerNewsSearch';
import Setting from './components/setting/Setting';
import About from './components/about/About';
import ErrorBoundary from './components/error/ErrorBoundary';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [defaultStyle, changeDefaultLight] = useState(true);
  const [isVisibleSidebar, changeVisibleSidebar] = useState(false);
  const [isThemeLight, changeThemeLight] = useState(true);
  const theme = () => {
    let theme;
    if (defaultStyle) {
      theme = "default light";
    } else {
      theme = isThemeLight ? "experimental light" : "experimental dark";
    }
    return theme;
  }
  return (
    <div className={theme()}>
      <div className="container">
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path="/settings" render={
                props => (
                  <Setting
                    changeDefaultLight={() => changeDefaultLight(!defaultStyle)}
                    visibleSidebar={isVisibleSidebar}
                    isThemeLight={isThemeLight}
                    changeThemeLight={() => changeThemeLight(!isThemeLight)}
                    changeVisibleSidebar={() => changeVisibleSidebar(!isVisibleSidebar)}
                    {...props}
                  />)
              }
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/" render={
                props => (
                  <HackerNewsSearch
                    {...props}
                    visibleSidebar={isVisibleSidebar}
                    isThemeLight={isThemeLight}
                    changeThemeLight={() => changeThemeLight(!isThemeLight)}
                  />
                )
              } />
            </Switch>
          </Router>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
