import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom'
import fire from '../Fire';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }

    signup(e){
    e.preventDefault();
    var Email = document.getElementsByClassName('field__input a-field__input')[0].value;
    var Password = document.getElementsByClassName('field__input a-field__input')[1].value;
    var Password2 = document.getElementsByClassName('field__input a-field__input')[2].value;

    if (Password == Password2){
        fire.auth().createUserWithEmailAndPassword(Email, Password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
            alert(error)
            })
    }else{
        alert("Passwords don't match");
        console.log(Password, Password2)
    }

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
                    <input class="field__input a-field__input" placeholder="Enter Your Password..."  type="password" required/>
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Password</span>
                    </span>
                </label>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Reenter Your Password..."  type="password" required/>
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Confirm Password</span>
                    </span>
                </label>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} className="register-link-button"> Back to Login</Link>
                <div class="wrap" /*onClick={() => this.props.register('hi@gmail.com', 'fuck')}*/>
                    <button class="button" onClick={this.signup}>Submit</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Register