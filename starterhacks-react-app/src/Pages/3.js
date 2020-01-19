import React from 'react';
import './3.css'
import ThreeCard from './3Card'
import fire from '../Fire';

var therapists = []

class three extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            therapists: null,
            one : null,
            two : null,
            three: null
        }
    }


    render(){
        return(
            <div className="three-div">
                <div className="three-text">Here's Your Match</div>
                <div className="therapist-div">
                    <ThreeCard bio={"Loves taking long walks on the beach with my dog. 5+ years of experience with mental health service."}uid={'9czKCZQOboVet8ZdxJUuUIs3aJ32'}></ThreeCard>
                    <ThreeCard bio={"Mother of two, loves helping kids at elementary school"} uid={'9czKCZQOboVet8ZdxJUuUIs3aJ32'}></ThreeCard>
                    <ThreeCard bio={"Father of six, loves teddy bears and baseball"} uid={'9czKCZQOboVet8ZdxJUuUIs3aJ32'}></ThreeCard>


                </div>
            </div>
        )
    }
}

export default three