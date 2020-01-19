import React from 'react';

class Page1 extends React.Component{
    constructor (props) {
        super(props);
        this.send = this.send.bind(this);
        this.state = {
            otherUid: "1VTVFr28TOPPR8wHrSigMmLkrP73",
            uid: "",
            messages: []
        };
    }

    send(e) {
        e.preventDefault();
        var message = document.getElementsByClassName('message')[0].value;

        var updates = {};
        updates["users/" + this.state.uid + "/chatlog"] = fire.database().ref("users/"+this.state.uid+"/chatlog").push(message)
        updates["users/" + this.state.otherUid + "/chatlog"] = fire.database().ref("users/"+this.state.otherUid+"/chatlog").push(message)

        fire.database().ref().update(updates);

        // fire.database().ref("users/" + this.state.uid + "/chatlog").set({"message": message, "to": this.state.otherUid});

        // reference = fire.database().ref("users/" + this.state.uid + "/chatlog")

        // reference.setValue(reference.val());
    }

    render() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({uid: user.uid.toString()});
                this.setState({messages: user.messages});
                // fire.database().ref('starter-ba2c5/users/' + user.uid + "/chatlog").on('child_added', function(childSnapshot, prevChildKey) {
                //     if (childSnapshot.child("/to").val() == this.state.otherUid){
                //         this.setState(prevState => {
                //             prevState.messages.push([user.uid, childSnapshot.child("message")]);
                //         });
                //         // this.state.outgoing.push(childSnapshot.child("message"));
                //     }
                // });
                // fire.database().ref('starter-ba2c5/users/' + user.uid + "/chatlog").on("child_added", function(childSnapshot, prevChildKey) {
                //     if (childSnapshot.child("/to").val() == user.uid){
                //         this.setState(prevState => {
                //             prevState.messages.push([user.uid, childSnapshot.child("message")]);
                //         });
                //         // this.state.incoming.push(childSnapshot.child("message"));
                //     }
                // });
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
}

export default Page1