import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Pages/Login'
import Register from './Pages/Register';
import './App.css';
import fire from './Fire.js'
import LogoutButton from './LogoutButton.js'
import ChatBox from "./Pages/Chat";

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
        this.setState({ user });
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
            <div> logged in </div> : 
            <div>
              <ChatBox></ChatBox>
              <Switch>
                <Route path='/register' component={Register}></Route>
                <Route path='/' component={Login}></Route>
              </Switch>
            </div>           
            } 
        </BrowserRouter>
        <LogoutButton></LogoutButton>
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