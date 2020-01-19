import React from 'react';
import './3Card.css';


class ThreeCard extends React.Component{
    render(){
        return(
            <div className="therapist-card">
                <div className="therapist-pfp"></div>
                <div className="therapist-name">Daniel Yu</div>
                <div className="therapist-bio">I love long walks on the beach with my lovely doggos</div>
                <div class="wrap3">
                        <button class="button3" onClick={this.login}>Chat</button>
                    </div>

            </div>
        )
    }
}

export default ThreeCard