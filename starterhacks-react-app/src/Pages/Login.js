import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import fire from '../Fire';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }

    login(e) {
        e.preventDefault();
        var Email = document.getElementsByClassName('field__input a-field__input')[0].value;
        var Password = document.getElementsByClassName('field__input a-field__input')[1].value;
        fire.auth().signInWithEmailAndPassword(Email, Password).then((u)=>{
        }).catch((error) => {
            console.log(error);
            alert(error)

          });
    }
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
                    <input class="field__input a-field__input" placeholder="Enter Your Password..." required type="password"/>
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Password</span>
                    </span>
                </label>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} className="register-link-button"> Register</Link>
                    <div class="wrap">
                        <button class="button" onClick={this.login}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login