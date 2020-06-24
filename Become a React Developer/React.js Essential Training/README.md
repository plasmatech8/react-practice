# React.js Essential Training

Tutorial: https://www.linkedin.com/learning/react-js-essential-training-3/create-robust-user-interfaces-with-react-js?pathUrn=urn%3Ali%3AlyndaLearningPath%3A593715e0498e9e9be7fb8506&u=2093164

## 01. Create React App

Global install: `sudo npm install -g create-react-app`
Golbal usage: `create-react-app`
Or you can use non-global: `npx create-react-app hello-react --use-npm`

## 02. React Elements

```js
var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}
/* const title = React.createElement(
  'h1', // Element
  {id: 'title', className: 'header', style: style},  // Attributes
  'Hello' // Children
) */
const title = (
  <h1 id="title", className="header" style={style}>
  Hello
  </h1>
)
ReactDOM.render(
  title,
  document.getElementById('root')
);
```

## 03. React Components

Instead of function-based components, we can use class-based components.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render(){
    return (
      <div>
        <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
        <p>I'll check back in {this.props.minutes} minutes.</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message color="blue" msg="how are you?" minutes={8}/>,
  document.getElementById('root')
);
```
