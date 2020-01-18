import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Login}></Route>
        <Route path='/' component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
