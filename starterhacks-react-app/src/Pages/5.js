import React from 'react';
import './5.css'


class five extends React.Component{

    click(event){
        var file = (event.target.files)
        console.log(file)
    }

    render(){
        return(
            <div className="therapist-settings">
                <div className="therapist-title">Enter Your Credentials</div>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your First Name..." required />
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">First Name</span>
                    </span>
                </label>
                <label class="field a-field a-field_a1">
                    <input class="field__input a-field__input" placeholder="Enter Your Last Name..." required />
                    <span class="a-field__label-wrap">
                    <span class="a-field__label">Last Name</span>
                    </span>
                </label>
                <textarea className="therapist-bio-div" placeholder="Enter a Short Biography" cols="30" rows="5"></textarea>   
                <div class="wrap" style={{marginTop: '20px'}} onClick={this.click} /*onClick={() => this.props.register('hi@gmail.com', 'fuck')}*/>
                    <button className="button" onClick={this.signup}>Register</button>
                </div>
            </div>
        )
    }
}

export default five