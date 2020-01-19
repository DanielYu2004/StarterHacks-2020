import React from 'react';
import {Link} from 'react-router-dom'
import './3.css'
import ThreeCard from './3Card'

class three extends React.Component{
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