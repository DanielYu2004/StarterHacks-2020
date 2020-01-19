import React from 'react';
import {Link} from 'react-router-dom'
import './3.css'
import ThreeCard from './3Card'
import fire from '../Fire';

class three extends React.Component{
    match() {
        var therapists = fire.database().ref("users/therapists").val();
        var amount = Math.min(therapists.length, 3)
        var choices = [];
        for (var i = 0; i < amount; i++) {
            var random = Math.floor(Math.random()*therapists.length)
            choices.push(therapists[random]);
            delete therapists[random]
        }
        return choices
    }

    render(){
        return(
            <div className="three-div">
                <div className="three-text">Here's Your Matches</div>
                <div className="therapist-div">
                    <ThreeCard></ThreeCard>
                    <ThreeCard></ThreeCard>
                    <ThreeCard></ThreeCard>

                </div>
            </div>
        )
    }
}

export default three