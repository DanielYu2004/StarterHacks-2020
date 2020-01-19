import React from 'react';
import fire from '../Fire.js'
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import './Loggedin.css'
class Loggedin extends React.Component{
    render(){
        return(
            <div className="mission-div">
                <div className="mission-text">We here at Anonomy strive to make the world and community around us a happier, peaceful place. We are always willing to listen to your problems, and our team of approved therapists will do whatever it takes to rejuvenate your mental health. Your privacy is our top priority, and will never be disclosed to third parties. This is our mission, Anomony. </div>
                <Link to="/1" style={{ textDecoration: 'none', color: 'white' }}>
                    <div class="wrap">
                            <button class="button" onClick={this.login}>Lets Go</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Loggedin