import React from 'react';
import './ChatMessage.css'
class ChatMessage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message : this.props.message,
            left : true
        }
    }
    render(){
        return(
            <div className="message-div" style={{alignSelf : 'flex-end'}}>
                {this.state.message}
            </div>
        )
    }
}

export default ChatMessage