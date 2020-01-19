import React from 'react';
import fire from '../Fire.js'
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import './Loggedin.css'
class Loggedin extends React.Component{
    render(){
        return(
            <div className="mission-div">
                <div className="mission-text">the quick brown fox jumps over the lazy dog</div>
                <Link to="/1">
                    <div class="wrap">
                            <button class="button" onClick={this.login}>Lets Go</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Loggedin