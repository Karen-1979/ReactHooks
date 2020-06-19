import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboad/Dashboard";
import ProjecteDetails from "./components/projects/ProecteDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProgect from "./components/projects/CreateProgect";
import Person from "./components/projects/Person";
import TodoList from "./components/projects/TodoList";
import SigUinDeteis from './components/auth/SigUinDeteis'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
         
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjecteDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProgect} />
            <Route path="/todo" component={TodoList} />
            <Route path="/Person" component={Person} />
            <Route path="/register" component={SigUinDeteis}/>
           
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
