import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import fire from '../Fire';

class Login extends React.Component{
    constructor (props) {
        super(props);
        this.send = this.send.bind(this);
        this.state = {
            otherUid: "5pGqew3j3thWoXiNsrNphskRF2o2",
            uid: "",
            messages: []
        };
    }

    send(e) {
        e.preventDefault();
        var message = document.getElementsByClassName('message')[0].value;

        fire.database().ref("users/" + this.state.uid + "/chatlog").set({"message": message, "to": this.state.otherUid});
    }

    render() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({uid: user.uid.toString()})
                fire.database().ref('starter-ba2c5/users/' + user.uid + "/chatlog").on('child_added', function(childSnapshot, prevChildKey) {
                    if (childSnapshot.child("/to").val() == this.state.otherUid){
                        this.setState(prevState => {
                            prevState.messages.push([user.uid, childSnapshot.child("message")]);
                        });
                        // this.state.outgoing.push(childSnapshot.child("message"));
                    }
                });
                fire.database().ref('starter-ba2c5/users/' + user.uid + "/chatlog").on("child_added", function(childSnapshot, prevChildKey) {
                    if (childSnapshot.child("/to").val() == user.uid){
                        this.setState(prevState => {
                            prevState.messages.push([user.uid, childSnapshot.child("message")]);
                        });
                        // this.state.incoming.push(childSnapshot.child("message"));
                    }
                });
            }
        });
          
        console.log(this.state.messages, "messages");
        return(
            <div>
                <input class="message" placeholder="Enter Your Message..." required/>
                <button class="button" onClick={this.send}>send</button>
            </div>
        );
    }
    // constructor(props) {
    //     super(props);
    //     this.login = this.login.bind(this);
    //     this.state = {
    //       email: '',
    //       password: ''
    //     };
    //   }

    // login(e) {
    //     e.preventDefault();
    //     var Email = document.getElementsByClassName('field__input a-field__input')[0].value;
    //     var Password = document.getElementsByClassName('field__input a-field__input')[0].value;
    //     fire.auth().signInWithEmailAndPassword(Email, Password).then((u)=>{
    //     }).catch((error) => {
    //         console.log(error);
    //       });
    // }
    // render(){
    //     return(
    //         <div className="login-div">
    //             <div className="login-div-content">
    //                 <h1 className="login-title">Toast</h1>
    //                 <label class="field a-field a-field_a1">
    //                     <input class="field__input a-field__input" placeholder="Enter Your Email..." required/>
    //                     <span class="a-field__label-wrap">
    //                     <span class="a-field__label">Email</span>
    //                     </span>
    //                 </label>
    //                 <label class="field a-field a-field_a1">
    //                 <input class="field__input a-field__input" placeholder="Enter Your Password..." required/>
    //                 <span class="a-field__label-wrap">
    //                 <span class="a-field__label">Password</span>
    //                 </span>
    //             </label>
    //                 <Link to="/register" style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} className="register-link-button"> Register</Link>
    //                 <div class="wrap">
    //                     <button class="button" onClick={this.login}>Submit</button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Login