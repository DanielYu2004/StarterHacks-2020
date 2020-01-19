import React from 'react';
import './5.css'
class five extends React.Component{
    render(){
        return(
            <div className="therapist-settings">
                <div className="therapist-title">Enter Your Credentials</div>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your First Name..." required type="password"/>
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">First Name</span>
                    </span>
                </label>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your Last Name..." required type="password"/>
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Last Name</span>
                    </span>
                </label>
                <textarea className="therapist-bio-div" width="50px"></textarea>   
            </div>
        )
    }
}

export default five