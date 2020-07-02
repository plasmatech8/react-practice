# React.js Essential Training

Tutorial: https://www.linkedin.com/learning/react-js-building-an-interface-2/creating-interfaces-with-react?pathUrn=urn%3Ali%3AlyndaLearningPath%3A593715e0498e9e9be7fb8506&u=2093164

## 01. Building a Basic App

```bash
cd Become a React Developer/React.js Building an Interface

npx create-react-app reactinterfaces
```

### Basics

You can import images and css files:
```js
import logo from './logo.svg';
import './App.css';
<img src={logo} className="App-logo" alt="logo"/>
```
The logo can then be used in the src of an `img` tag, and the css is applied only to the component.

> Note: `className` is used instead of `class` in jsx because we need to avoid JavaScript keywords.

### Modules

```bash
cd Become a React Developer/React.js Building an Interface/reactinterfaces/src

npm install -s bootstrap react-icons lodash jquery popper.js moment react-moment
```

We are installing:
* Regular Bootstrap
* jQuery (requirement for Bootstrap)
* Popper.js
* Lodash (for managing arrays)
* Moment.js (datetime manipulation)
* React Moment (React componentised version of Moment.js)
* React icons (lots of icons, i.e. Font Awesome)

And we will import from `node_modules/` into `index.js`:
```js
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
```

### Organisation

We will create a `src/components` and `src/css` folder.

BE CAREFUL WITH ORDER OF IMPORTS FOR CSS. css is implemented in imported order.

## 02. Working with Components

Created AddAppointments, ListAppointments, and SearchComponents.

### LifeCycle

We can fetch data on component mount into the DOM.
```js
constructor(){
    super();
    this.state = {
      myName: 'Ray',
      myAppointments: []
    }
}
componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        })
        this.setState({myAppointments: apts});
      });
}
```
If you go into the Components tab in your browser, and click on the App
component, you can see the props, state and source file.

### Keys

When you loop to create multiple elements, you need to add a `key` attribute.

You might need to use a primary key, or add index as you loop through (either
using enumeration or tracking the lastIndex).

### Premade components

We can use the premade components from `react-icons` to obtain a facnier X
symbol.
```js
// A fancy(er) X symbol
import {FaTimes} from 'react-icons/fa';
<FaTimes/>
```

We can use the premade components from `react-moment` to reformat our dates from
military time (2018-11-28 14:45) to a pretty time.
```js
import Moment from 'react-moment';
<Moment date={item.aptDate}
        parse="YYY-MM-dd hh:mm"
        format="D MMMM, h:MMa"/>
```

## 03. Handling Events and Adding Records

### Handling events through props

We can pass a function as a subcomponent as a prop which can affect state in
parent component.

In the code, we will pass the `deleteAppointment` function into the
`ListAppointments` component. When the delete button is pressed, the
appointment is deleted from `App.props.myAppointments`.

Keep in mind when making Component functions, **you need to either**:
* Use arrow functions in your class
* Use `this.deleteAppointment = this.deleteAppointment.bind(this);` to bind
```js
deleteAppointment = (apt) => {
  let tempApts = this.state.myAppointments;
  tempApts = without(tempApts, apt);
  this.setState({myAppointments: tempApts});
}
```
```js
constructor(){
  super();
  this.state = {
    myAppointments: [],
    lastIndex: 0
  }
  this.deleteAppointment = this.deleteAppointment.bind(this)
}
deleteAppointment(apt){
  let tempApts = this.state.myAppointments;
  tempApts = without(tempApts, apt);
  this.setState({myAppointments: tempApts});
}
```

### Form display

We will add a form to the `AddAppointments` component. The app will have a
`formDisplay` state which determines whether the form is shown or hidden -
which is toggled using the `App.toggleForm`.

Local functions usually only do small work (i.e. handleFOrm) and will often
pass the work to the parent component.

### Form state

`AddAppointments` will have state based on the form contents. The state is
updated using the `onChange` event. The form can be updated based on state
by beind the state to the input using `value={this.state.field}`.

This state will need to be converted into database-format later.

### Form submit

`AddAppointments` will use `onSubmit={this.handleAdd}` to transform the data
and send the results to the `App.addAppointment` method (passed via props).

## 04. Searching and Sorting

### Search component

We will add array sorting in the `App.render` method, based on the
`orderBy` and `orderDir` states.

The boxes in the dropdown box will be highlighed based on the state passed as
props.

The `AddAppointments.props.changeOrder(orderBy, orderDir)` function will be
triggered when one of the dropdown items are clicked.

### Live search input

We will add `queryText` state to `App`.

When the textbox is updated in `SearchAppointments`, it will run the
`SearchAppointments.props.searchApts` function.