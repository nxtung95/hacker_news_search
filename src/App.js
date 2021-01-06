import React, { useState } from 'react';
import './App.css';
import HackerNewsSearch from './HackerNewsSearch';
import Setting from './components/setting/Setting';
import About from './components/about/About';
import ErrorBoundary from './components/error/ErrorBoundary';
import LocalStorage from './service/LocalStorage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const getDefaultVisible = () => {
    let style = LocalStorage.getItemSetting("style");
    if (style === "Experimental") {
      return false;
    }
    return true;
  }
  const [isDefaultStyle, changeDefaultLight] = useState(() => getDefaultVisible());
  const [isVisibleSidebar, changeVisibleSidebar] = useState(() => !getDefaultVisible());
  const [isThemeLight, changeThemeLight] = useState(true);
  const theme = () => {
    let theme;
    if (isDefaultStyle) {
      theme = "default light";
    } else {
      theme = isThemeLight ? "experimental light" : "experimental dark";
    }
    return theme;
  }
  const [optionLogin, setOptionLogin] = useState(() => {
    return LocalStorage.getItemSetting("login");
  });
  const [isShowThumbnails, showThumbnails] = useState(() => {
    return LocalStorage.getItemSetting("showThumbnails");
  });
  return (
    <div className={theme()}>
      <div className="container">
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path="/settings" render={
                props => (
                  <Setting
                    changeDefaultLight={() => changeDefaultLight(!isDefaultStyle)}
                    visibleSidebar={isVisibleSidebar}
                    login={optionLogin}
                    setOptionLogin={(login) => setOptionLogin(login)}
                    isThemeLight={isThemeLight}
                    changeThemeLight={() => changeThemeLight(!isThemeLight)}
                    changeVisibleSidebar={() => changeVisibleSidebar(!isVisibleSidebar)}
                    showThumbnails={(isShowImage) => showThumbnails(isShowImage)}
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
                    login={optionLogin}
                    isThemeLight={isThemeLight}
                    changeThemeLight={() => changeThemeLight(!isThemeLight)}
                    isDefaultStyle={isDefaultStyle}
                    isShowThumbnails={isShowThumbnails}
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
