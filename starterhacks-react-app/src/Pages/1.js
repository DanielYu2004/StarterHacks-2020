import React from 'react';
import './1.css';
import {Link} from 'react-router-dom'
import fire from "../Fire";

class one extends React.Component{
    render(){
        return(
            <div className="one-div">
                <div className="one-text">Are you looking for assistance?</div>
                <div className="one-buttons">
                    <Link to="/2" style={{ textDecoration: 'none', color: 'white'}} class="wrap1">
                        <button class="button1" onClick={this.login}>Yes</button>
                    </Link>
                    <Link to="/4" style={{ textDecoration: 'none', color: 'white' }} class="wrap11">
                        <button class="button11" onClick={this.login}>No</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default one