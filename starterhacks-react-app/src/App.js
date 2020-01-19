import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Pages/Login'
import Register from './Pages/Register';
import './App.css';
import fire from './Fire.js'
import LogoutButton from './LogoutButton.js'
import Loggedin from './Pages/Loggedin'
import one from './Pages/1'
import two from './Pages/2'
import three from './Pages/3';
import four from './Pages/4'
import five from './Pages/5'


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({user: user});
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {

    return (
      <div>
        <BrowserRouter>
            {this.state.user ? 
            <div className="logged-in-body">
              <LogoutButton></LogoutButton>
              <Switch>
                <Route exact path='/1' component={one}></Route>
                <Route exact path='/2' component={two}></Route>
                <Route exact path='/3' component={three}></Route>
                <Route exact path='/4' component={four}></Route>
                <Route exact path='/5' component={five}></Route>
                <Route path="/register" component={Loggedin}></Route>
              </Switch>
            </div>
            : 
            <Switch>
              <Route   
               exact path='/register' 
              component={Register}
              ></Route>
              <Route path='/' component={Login}></Route>

            </Switch>
            } 
        </BrowserRouter>
      </div>
    );
  }
}

//const firebaseAppAuth = firebaseApp.auth();

//const providers = {
//  googleProvider: new firebase.auth.GoogleAuthProvider(),
//};

//export default withFirebaseAuth({
 // providers,
  //firebaseAppAuth,
//})(App);

export default App

/*
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'
import Register from './Pages/Register';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path='/register' 
          component={Register}
          render={(props) => <Register {...props} user={user} signOut={signOut} signInWithGoogle={signInWithGoogle}/>}
        ></Route>
        <Route 
          path='/' 
          render={(props) => <Login {...props} isAuthed={true} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);*/