import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouterComponent from './components/appRouter'

function App(props) {
  return (

    <div className="App">
      <Router>
       <Route component={AppRouterComponent} />
      </Router>
    </div>
  );
}

export default App;
