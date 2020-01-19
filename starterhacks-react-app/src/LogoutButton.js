import React from 'react';
import fire from './Fire';

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
            <div>
                <button onClick={this.signout}>Logout</button>
            </div>
        )
    }
}

export default LogoutButton