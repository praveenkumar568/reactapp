import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Services from './Services';
import Template from './template';
import Header from './header';
import './App.css';
class App extends Component {
   render() {
    
      return (
         <Router>
            <Template/>
         </Router>
      );
   }
}
export default App;