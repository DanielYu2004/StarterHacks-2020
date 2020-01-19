import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import fire from '../Fire';

class ChatBox extends React.Component {
    constructor (props) {
        super(props);
        this.send = this.send.bind(this);
        this.state = {
            otherUid: "IYyxNyzMS2fEV2VppTXB9fiOmYR2",
            uid: "",
            messages: []
        };

        this.send = this.send.bind(this);
    }

    componentDidMount() {
        try {
            var possibleUid = localStorage.getItem("user");
        } catch {
            var possibleUid = '';
        } finally {
            if (possibleUid !== '') {
                fire.database().ref("users/" + possibleUid).once("value", user => {
                    this.setState({uid: possibleUid});
                    console.log(this.state.uid);
                    this.setState({messages: user.messages});
                    // console.log(this.state.messages);
                });
            }
        }
    }

    send(e) {
        e.preventDefault();
        var tempUid = this.state.uid
        var message = [document.getElementsByClassName('message')[0].value, tempUid];
        document.getElementsByClassName('message')[0].value = '';

        // var updates = {};
        console.log(this.state.uid, this.state.otherUid)
        if (this.state.uid && this.state.otherUid) {
            // updates["users/" + this.state.uid + "/chatlog"] = fire.database().ref("users/"+this.state.uid+"/chatlog").push(message)
            // updates["users/" + this.state.otherUid + "/chatlog"] = fire.database().ref("users/"+this.state.otherUid+"/chatlog").push(message)

            // fire.database().ref("users/" + this.state.uid + "/chatlog").val() = 
            fire.database().ref('users/' + this.state.uid).child('chatlog').once('value').then(function(snapshot) {
                var prevMessages = (snapshot.val())
                // console.log(prevMessages)
                if (typeof (prevMessages) != Array){
                    prevMessages = []
                } 
                console.log(prevMessages, "is the prev messages")
                prevMessages.push(message)
                fire.database().ref('users/' + tempUid).update({
                    chatlog: prevMessages
                });
            });

            fire.database().ref('users/' + this.state.otherUid).child('chatlog').once('value').then(function(snapshot) {
                var prevMessages = (snapshot.val())
                // console.log(prevMessages)
                if (typeof (prevMessages) != Array){
                    prevMessages = []
                } 
                prevMessages.push(message)
                fire.database().ref('users/' + tempUid).update({
                    chatlog: prevMessages
                });
            });
        } else {
            console.log("Faild to find uids")
        }

        // fire.database().ref("users/" + this.state.uid + "/chatlog").set({"message": message, "to": this.state.otherUid});

        // reference = fire.database().ref("users/" + this.state.uid + "/chatlog")

        // reference.setValue(reference.val());
    }

    render() {
        return(
            <div>
                <input class="message" placeholder="Enter Your Message..." required/>
                <button class="button" onClick={this.send}>send</button>
            </div>
        );
    }
}

export default ChatBox;