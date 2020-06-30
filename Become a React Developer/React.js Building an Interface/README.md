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
If you go into the Components tab in your browser, and click on the App component, you can see the props, state and source file.

### Keys

When you loop to create multiple elements, you need to add a `key` attribute.

You might need to use a primary key, or add index as you loop through (either using enumeration or tracking the lastIndex).