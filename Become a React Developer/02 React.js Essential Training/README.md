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
(Add global helper functions at top)

## 04 Props and State

### Loops

We can create **looped/nested components** using `Array.map`.

### States

We can add **component states** to our components using class constructors
(we can also use states on funcitons with `useState`).

We can change the state using a class function.
`this.toggleOpenClosed = this.toggleOpenClosed.bind(this);` is required in the
constructorto make `this` accessible from the `toggleOpenClosed` function.

### Boilerplate removal

Note that `state = { open: false }` can be used to replace **boilerplate code** in the constructor:
```js
constructor(props){
    super(props);
    this.state = {
      open: true
    };
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  }
```
Also, if you use arrow functions, they will automatically bind to `this`.

## 05. Additional Library Features

### Component lifecycle methods

**Component lifecycle methods** are only available in class-based Components.

i.e.
* Constructor (initialise state and add hooks)
* Render (re-render)
* componentDidMount (after added to DOM, great for fetching data)
* componentDidUpdate (when update is made)
* componentWillUnmount (used for cleanup)

### API calls

An API call can be sent using `fetch` after the component is mounted to the DOM.
```js
componentDidMount(){
  console.log("The component is now mounted!");
  this.setState({loading: true});
  fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
    .then(data => data.json())
    .then(data => this.setState({data, loading: false}))
}
```

### Form inputs

We can use forms which cause state changes.

`e.preventDefault();` must be used to prevent a form from reloading the page.

### Default props

`defaultProps` can be set to provide default values for a Component tag when no
properties are provided.

i.e.
```js
  static defaultProps = {
    books: [
      {title: "Tahoe Tales", author: "Chet Whitley", pages: 100}
    ]
  }
```
Gives default values for``<Library/>` when no `books` property is included.

We can also add default values for Components from within constructor/function.

i.e.
```js
const {
  title="No title provided",
  author="NA",
  pages="NA",
  freeBookmark="NA"
} = this.props;

```

### PropTypes

The `prop-types` package can be used to console log when an invalid type is being used.

i.e.
```js
import PropTypes from 'prop-types'

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
}
```

### Modularisation

We can move each Component into its own file.

If we use `export default Library`, it must be imported using `import Library from './Library'`.

We can also set the export to an object and use destructuring.

### Build the App

Build using `npm run build`.

It can be tested using `sdo npm install server` and `npx serve build/`
