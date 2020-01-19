import React from 'react';
import './5.css'
import {Link} from 'react-router-dom'
import fire from "../Fire";


class five extends React.Component{

    click(event){
        var file = (event.target.files)
        console.log(file)
    }

    submit(){
        var uid = localStorage.getItem("user")
        if (!uid) {
            console.log("uid doesn't work")
        }
        var therapistsname = document.getElementsByClassName("field__input a-field__input")[0].value + ' ' + document.getElementsByClassName("field__input a-field__input")[1].value;
        var therapistbio = document.getElementsByClassName("therapist-bio-div")[0].value;
        fire.database().ref("users/" + uid + "/name").set(therapistsname);
        fire.database().ref("users/" + uid + "/bio").set(therapistbio);
        // console.log(newValue)
        // fire.database().ref("users/" + uid).set(newValue);
        // fire.database().ref("users/" + uid).once("value", value => {
        //     console.log(value)
        

        fire.database().ref('users/therapists').once('value').then(function(snapshot) {
            var prevTherapists = (snapshot.val())
            // console.log(prevMessages)
            if (typeof (prevMessages) != Array){
                prevTherapists = []
            } 
            console.log(prevTherapists, "is the prev messages")
            prevTherapists.push(uid)
            fire.database().ref('users').update({
                therapists: prevTherapists
            });
        });
    }   

    render(){
        return(
            <div className="therapist-settings">
                <div className="therapist-title">Enter Your Credentials</div>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your First Name..." required />
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">First Name</span>
                    </span>
                </label>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your Last Name..." required />
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Last Name</span>
                    </span>
                </label>
                <textarea className="therapist-bio-div" placeholder="Enter a Short Biography" cols="30" rows="5"></textarea>   
                <div class="wrap" style={{marginTop: '20px'}} onClick={this.click} /*onClick={() => this.props.register('hi@gmail.com', 'fuck')}*/>
                    <Link to="/Chat">
                        <button className="button" onClick={this.submit}>Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default five