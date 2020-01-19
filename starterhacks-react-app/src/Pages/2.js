import React from 'react';
import './2.css'
import TwoCard from './2Card';
import {Link} from 'react-router-dom'
class two extends React.Component{
    constructor(){
        super()
        this.state = {
            list : ["Insomnia", "Depression", "Incompetence", "Mood Swings/Bipolarity", "Nervousness", "Lack of Belonging",
            "Addiction/Substance Abuse", "Anxiety", "Scizophrenic", "Past Trauma", "Lack of Parental Figures/Role Models",
            "Ineffective Relationships/Friendships", "Procrastination", "Self Esteem/Image", "Lack of Purpose",
            "Seek mediums of escapism(gaming, social media, etc)", "Actively talk to therapists/other medical professionsals",
            "Laziness", "Paranoia", "Workaholic", "Copious Stress"]
        }
    }
    render(){
        return(
            <div className="two-div">
                <div className="one-title"><p>Select all that may be affecting you</p></div>
                <div className="symptoms-div">


                    {this.state.list.map( (x) => <TwoCard symp={x}></TwoCard>)}
                </div>
                <Link to="/3" style={{ textDecoration: 'none', color: 'white' }}>
                    <div class="wrap2">
                            <button class="button2" onClick={this.login}>Next</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default two