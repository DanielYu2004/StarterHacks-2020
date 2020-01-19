import React from 'react';
import {Link} from 'react-router-dom'
import './3.css'
import ThreeCard from './3Card'
import fire from '../Fire';

class three extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            therapist1: null,
            therapist2: null,
            therapist3: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    match() {
        var therapists = []
        fire.database().ref("users/therapists").once("value", value => {
            therapists = value;
        });
        var amount = Math.min(therapists.length, 3)
        var choices = [];
        for (var i = 0; i < amount; i++) {
            var random = Math.floor(Math.random()*therapists.length)
            choices.push(therapists[random]);
            delete therapists[random]
        }
        return choices
    }

    componentDidMount() {
        var therapists = this.match()
        this.setState({therapist1: therapists[0]});
        this.setState({therapist2: therapists[1]});
        this.setState({therapist3: therapists[2]});
    }

    render(){

        return(
            <div className="three-div">
                <div className="three-text">Here's Your Matches</div>
                <div className="therapist-div">
                    <ThreeCard uid={this.state.therapist1}></ThreeCard>
                    <ThreeCard uid={this.state.therapist2}></ThreeCard>
                    <ThreeCard uid={this.state.therapist3}></ThreeCard>

                </div>
            </div>
        )
    }
}

export default three