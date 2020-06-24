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

Instead of function-based components, we can use **class-based components**.

Destructuring can be used to make variables more convenient to access.

```js
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
```

We can also add **custom methods** to our Component classes.

```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render(){
    const {total, powder, backcountry, goal} = this.props;
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>(Powder Days: {powder}, Backcountry Days: {backcountry})</p>
        </div>
        <div>
          <p>Goal Days: {goal}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
}

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById('root')
);
```

We can also use function Components (arrow or function or function-statement).

My favourite way to do it is below
```js
import React from 'react';
import ReactDOM from 'react-dom';

function SkiDayCounter({total, powder, backcountry, goal}){
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>(Powder Days: {powder}, Backcountry Days: {backcountry})</p>
      </div>
      <div>
        <p>Goal Days: {goal}</p>
      </div>
      <div>
        <p>Goal Progress: {total/goal * 100}</p>
      </div>
    </section>
  )
}

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById('root')
);
```