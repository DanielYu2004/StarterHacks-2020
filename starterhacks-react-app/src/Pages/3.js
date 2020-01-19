import React from 'react';
import {Link} from 'react-router-dom'
import {render} from 'react-dom';
import './3.css'
import ThreeCard from './3Card'
import fire from '../Fire';

var therapists = []

class three extends React.Component{
    constructor(props) {
        super(props)
        // this.state = {
        //     therapists: null
        // }
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.render = this.render.bind(this);
    }

    componentDidMount() {
        fire.database().ref('users/therapists').once('value').then(function(snapshot) {
            var tempRapists = (snapshot.val());
            // console.log(therapists)
            var amount = Math.min(tempRapists.length, 3)
            var choices = [];
            for (var i = 0; i < amount; i++) {
                var random = Math.floor(Math.random()*tempRapists.length)
                choices.push(tempRapists[random]);
                delete tempRapists[random]
                // console.log(choices)
            }
            
            therapists = choices;

            while (therapists.length < 3) {
                therapists.push(null);
            }

            console.log(therapists)
    
        });
        
    }

    render(){
        // var therapists = []
        // fire.database().ref('users/therapists').once('value').then(function(snapshot) {
        //     var tempRapists = (snapshot.val());
        //     // console.log(therapists)
        //     var amount = Math.min(tempRapists.length, 3)
        //     var choices = [];
        //     for (var i = 0; i < amount; i++) {
        //         var random = Math.floor(Math.random()*tempRapists.length)
        //         choices.push(tempRapists[random]);
        //         delete tempRapists[random]
        //         console.log(choices)
        //     }
        //     therapists = choices
        // });
        // console.log(this.therapists, this)
        return(
            <div className="three-div">
                <div className="three-text">Here's Your Matches</div>
                <div className="therapist-div">
                    <ThreeCard uid={therapists[0]}></ThreeCard>
                    <ThreeCard uid={therapists[1]}></ThreeCard>
                    <ThreeCard uid={therapists[2]}></ThreeCard>
                </div>
            </div>
        )
    }
}

export default three