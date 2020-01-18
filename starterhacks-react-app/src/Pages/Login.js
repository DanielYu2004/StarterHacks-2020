import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    render(){
        return(
            <div className="login-div">
                <div className="login-div-content">
                    <h1 className="login-title">Toast</h1>
                    <label class="field a-field a-field_a1">
                        <input class="field__input a-field__input" placeholder="Enter Your Email..." required/>
                        <span class="a-field__label-wrap">
                        <span class="a-field__label">Email</span>
                        </span>
                    </label>
                    <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your Password..." required/>
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Password</span>
                    </span>
                </label>
                    <Link to="/register"> hi</Link>
                    <div class="wrap">
                        <button class="button">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login