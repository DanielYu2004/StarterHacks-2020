import React from 'react';
import fire from './Fire';
import {Link} from 'react-router-dom'
import './LogoutButton.css'

class LogoutButton extends React.Component{
    constructor(props) {
        super(props);
        this.signout = this.signout.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }

    signout(){
        fire.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    render(){
        return(
            <div className="logout-button-div">
                <Link to="/">
                  <button onClick={this.signout} id="logout-button" className="button"> Logout</button>
                </Link>
            </div>
        )
    }
}

export default LogoutButton