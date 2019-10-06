import React from 'react';
import './App.css';
import { 
  ThemeProvider, StyleReset
} from 'atomize'
import './App.css';
import Theme from './rules/theme';

import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();


function App() {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={Theme}>
        <StyleReset />
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Router>
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default App;
