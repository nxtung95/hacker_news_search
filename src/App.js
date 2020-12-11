import './App.css';
import HackerNewsSearch from './HackerNewsSearch';
import Setting from './components/setting/Setting';
import About from './components/about/About';
import ErrorBoundary from './components/error/ErrorBoundary';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/settings" component={Setting} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={HackerNewsSearch} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
