import React from 'react';  
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Home from '../container/home/home';
import About from '../container/about/about';


const AppRouter =()=> {
    return (
      <Router>
        <Header /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />        
          </Switch>
        <Footer /> 
      </Router>
    );
  }

  export default AppRouter;