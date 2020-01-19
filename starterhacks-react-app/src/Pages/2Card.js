import React from 'react';
import fire from '../Fire'
import './2Card.css'

class TwoCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            select : false,
            symp : this.props.symp
        }
        this.select = this.select.bind(this);

    }

    select(){
        /*
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {

                fire.database().ref('users/' + user.uid + '/symptoms').once('value').then(function(snapshot) {
                    console.log(snapshot.val())
                    var prevSymps = snapshot.val()
                 });
            if (prevSymps == undefined){
                prevSymps = []
            } 
            console.log(prevSymps)
            prevSymps.push(this.state.symp)

            
            fire.database().ref('users/' + user.uid + '/symps').set({
                symptoms : prevSymps
            });
            //console.log(fire.database().ref('users/' + user.uid).child('symptoms'))
            //console.log(fire.database().ref('users/' + user.uid).child('symptoms').push(this.state.symp).key)
            fire.database().ref('users/' + user.uid).update({
                symptoms : prevSymps
            }) 
               
            } else {
              this.setState({ user: null });
              localStorage.removeItem('user');
            }
          });*/
            var cardsymp = this.state.symp
            if (this.state.select == true){
                this.setState({select : false})
            }else{
                this.setState({select: true})
            }

            fire.auth().onAuthStateChanged((user) => {
                console.log(user);
                if (user) {

                    fire.database().ref('users/' + user.uid).child('symptoms').once('value').then(function(snapshot) {
                        var prevSymps = (snapshot.val())
                        console.log(prevSymps)
                        if (prevSymps == null){
                            prevSymps = []
                        } 
                        prevSymps.push(cardsymp)
                        fire.database().ref('users/' + user.uid).update({
                            symptoms: prevSymps
                        });
                    });
                    
                } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
                }
            });
            console.log(this.state.select)
    }

    render(){
        return(
            <div className="card-div" onClick={this.select} style={this.state.select ? {opacity: '50%'} : {opacity: '100%'}}>
                <div>{this.props.symp}</div>
            </div>
        )
    }
}

export default TwoCard