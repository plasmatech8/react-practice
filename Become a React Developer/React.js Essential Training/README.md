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