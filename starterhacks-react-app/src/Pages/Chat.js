import React from 'react';
import {Link} from 'react-router-dom'
import fire from '../Fire';

class ChatBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            otherUid: "",
            incoming: [],
            outgoing: []
        };
    }

    render() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
              fire.database().ref('starter-ba2c5/users/' + user.uid + "/sent").on('child_added', function(childSnapshot, prevChildKey) {
            if (childSnapshot.child("/to").val() == this.state.otherUid){
                this.setState(prevState => {
                    prevState.outgoing.push(childSnapshot.child("message"));
                });
                // this.state.outgoing.push(childSnapshot.child("message"));
            }
        });
        fire.database().ref('starter-ba2c5/users/' + user.uid + "/sent").on("child_added", function(childSnapshot, prevChildKey) {
            if (childSnapshot.child("/to").val() == user.uid){
                this.setState(prevState => {
                    prevState.incoming.push(childSnapshot.child("message"));
                });
                // this.state.incoming.push(childSnapshot.child("message"));
            }
        });
            }
          });
          
        console.log(this.state.incoming, "incoming");
        console.log(this.state.outoing, "outgoing");
        return(
            <div>

            </div>
        );
    }
}

export default ChatBox;