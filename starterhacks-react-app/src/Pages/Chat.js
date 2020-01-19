import React from 'react';
import {Link} from 'react-router-dom'
import fire from '../Fire';

class ChatBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            uid: fire.auth().currentUser,
            otherUid: "",
            incoming: [],
            outgoing: []
        };
    }

    render() {
        fire.database().ref('starter-ba2c5/users/' + this.state.uid + "/sent").on('child_added', function(childSnapshot, prevChildKey) {
            if (childSnapshot.child("/to").val == this.state.otherUid){
                this.setState(prevState => {
                    prevState.outgoing.push(childSnapshot.child("message"));
                });
                // this.state.outgoing.push(childSnapshot.child("message"));
            }
        });
        fire.database().ref('starter-ba2c5/users/' + this.state.otherUid + "/sent").on("child_added", function(childSnapshot, prevChildKey) {
            if (childSnapshot.child("/to").val == this.state.uid){
                this.setState(prevState => {
                    prevState.incoming.push(childSnapshot.child("message"));
                });
                // this.state.incoming.push(childSnapshot.child("message"));
            }
        });
        console.log(this.state.incoming);
        console.log(this.state.outoing);
        return(
            <dif>

            </dif>
        );
    }
}

export default ChatBox;