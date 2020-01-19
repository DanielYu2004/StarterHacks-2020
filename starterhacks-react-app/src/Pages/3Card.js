import React from 'react';
import './3Card.css';
import fire from "../Fire";
import {Link} from 'react-router-dom'


class ThreeCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            therapistUid: this.props.uid
        }
        this.chat = this.chat.bind(this);
    }

    chat(){
        try {
            var possibleUid = localStorage.getItem("user");
        } catch {
            console.log("can't find user id in therapist connection")
        } finally {
            if (possibleUid) {
                fire.database().ref("users/"+possibleUid).update({"therapist": this.state.therapistUid})
                
                fire.database().ref('users/' + this.state.uid).child('patients').once('value').then(function(snapshot) {
                    var prevPatients = (snapshot.val())
                    
                    prevPatients.push(possibleUid)
                    fire.database().ref('users/' + this.state.therapistUid).update({
                        chatlog: prevPatients
                    });
                });
            }
        }

    }

    render(){
        if (!this.state.therapistUid) {
            return (<div></div>)
        }
        var pfp = null;
        var name = null;
        var bio = null;
        var therapistRef = fire.database().ref("users/"+this.state.therapistUid)
        therapistRef.child("name").once("value", value => {
            name = value;
        });
        therapistRef.child("bio").once("value", value => {
            bio = value;
        });
        // document.getElementsByClassName("therapist-pfp").value = pfp;
        // document.getElementsByClassName("therapist-name").value = name;
        // document.getElementsByClassName("therapist-bio").value = bio;
        return(
            <div className="therapist-card">
                <div className="therapist-pfp"></div>
                <div className="therapist-name">{name}</div>
                <div className="therapist-bio">{bio}</div>
                <div class="wrap3">
                    <Link to="/Chat">
                        <button class="button3" onClick={this.login}>Chat</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ThreeCard