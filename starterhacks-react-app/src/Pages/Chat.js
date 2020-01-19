import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import fire from '../Fire';
import './Chat.css'
import ChatMessage from './ChatMessage'

class ChatBox extends React.Component {
    constructor (props) {
        super(props);
        this.send = this.send.bind(this);
        this.state = {
            otherUid: "uR49ZtBPVbOvKRxy6OHEQzGeuhl1",
            uid: "HRDjaIbu3kgP9ZQHLs7fSjALzv93",
            messages: []
        };

        this.send = this.send.bind(this);
    }

  

    send() {
        /*
        e.preventDefault();

        var tempUid = this.state.uid
        var message = [document.getElementsByClassName('message')[0].value, tempUid];
        document.getElementsByClassName('message')[0].value = '';

        // var updates = {};
        console.log(this.state.uid, this.state.otherUid)

        fire.database().ref('users/' + this.state.uid).child('chatlog').once('value').then(function(snapshot) {
            var prevMessages = (snapshot.val())
            console.log(prevMessages)
            if (prevMessages == null){
                prevMessages = []
            } 
            prevMessages.push(message)
            fire.database().ref('users/' + tempUid).child('chatlog').push(prevMessages)
        });

        fire.database().ref('users/' + this.state.otherUid).child('chatlog').once('value').then(function(snapshot) {
            var prevMessages = (snapshot.val())
            //console.log(prevMessages)
            if (prevMessages == null){
                prevMessages = []
            } 
            prevMessages.push(message)
            fire.database().ref('users/' + tempUid).child('chatlog').push(prevMessages)
        });

*/
        var message = document.getElementsByClassName('message13')[0].value
        document.getElementsByClassName('message13')[0].value = '';
        // var temp = this.state.messages.push(message)
        this.setState( {
            messages : this.state.messages.concat(message)
          });
    }

    render() {
        return(
            <div>
                <div className="chat-div">
                    <div className="messages-chat-div">

                    {this.state.messages.map( (x) => <ChatMessage message={x}></ChatMessage>)}
                        
                    </div>
                    <div className="chatinputs-bar">
                        <input class="message13" placeholder="Enter Your Message..." required/>
                        <button class="buttonn" onClick={this.send}>send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBox;