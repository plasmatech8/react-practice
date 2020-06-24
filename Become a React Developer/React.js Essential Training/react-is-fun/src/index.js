import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Message extends Component {
  render(){
    const {color, msg, minutes} = this.props;
    return (
      <div>
        <h1 style={{color: color}}>{msg}</h1>
        <p>I'll check back in {minutes} minutes.</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message color="blue" msg="how are you?" minutes={8}/>,
  document.getElementById('root')
);
