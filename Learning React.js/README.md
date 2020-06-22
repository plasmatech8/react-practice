# Become a React Developer

Tutorial: https://www.linkedin.com/learning/learning-react-js-5/using-create-react-app?u=2093164

## 01. Getting Started with React

Ways to use React:
* Create React App (good for learning or creating single-page web applications)
* Next.js (server rendered website)
* Gatsby (static rendered site)
* React Native with Expo (native applications)

We will initialise a React app (execute node package binaries):
`npx create-react-app hello-react --use-npm`

We will either use live server or `npm start` to start the live server.

`src/app.js` can be edited to update our homepage.

You should install React Developer Tools extension in your browser.

## 02. React Elements

`public/index.html` is our main webpage.

`<div id="root"></div>` tag contains our app.

`scr/index.js` script renders the app.

`ReactDOM.render` function renders the app.

```js
ReactDOM.render(
  React.createElement(
    "h1", { style: {color:"blue"}}, "...elements or text..."),
  document.getElementById('root')
);
```

Using `React.createElement` to create all of our elements can be unwieldy
(especially in lists), so JSX was created (HTML syntax).

```js
let city = {
  name: "Madrid",
  country: "Spain"
};

ReactDOM.render(
  <div>
    <h1 id="heading" className="cool"> Hello World!</h1>
    <ul>
      <li>Dog</li>
      <li>Cat</li>
      <li>Hamster</li>
    </ul>
    <p>{city.name} is in {city.country}</p>
  </div>,
  document.getElementById('root')
);
```

Note that className must be used instead of class.

## 03. React Components

### Components and Properties

A component is a function which returns UI elements.

A component function can be used in JSX as a Tag `<MyComponent/>` or
`<MyComponent></MyComponent>`

We can include the `props` parameter into our component function. Or we use
paramter destructuring (unpacking) using `{key1, key2, key3}` syntax.

It will pass in properties of the JSX tag into the function.

### Composing Components

It is good to have an `App` component that we can pass into the render
function.

### Lists of Elements/Objects

If we pass a list into JSX (i.e. `{myList}`) it will render the contents.

We can render a list of elements as multiple HTML tags using the **map**
function: `{lakes.map(lake => <li key={lake.id}>{lake.name}</li>)}`

We need to add a unique `keys` property when multiple of the same elements are
dynamically created.

### Conditional Rendering

We can add if statements in our Component functions to change variables before
using `{variableOfJSX}`.

We can also use ternary operators `{condition ? <p>True</p> : <p>False</p>}`.

### React Fragments

JSX expressions must have one parent.

To avoid this, we can use `div`, but that causes clutter.

We can use `React.Fragment` tags instead. Or use the shorthand: `<>...</>`

## 04. React States with Hooks

### States and Effects

We can import `useState` from react and use that to get and set states.

```js
const [status, setStatus] = useState("Open") // Default
return (
  <p>Status: {status}</p>
  <button onClick={() => setStatus("Closed")}>Close</button> // Change status
)
```

We can import `useEffect` from react. This can be used to cause event hooks to
provide interactivity and functionality.

`useEffect` will be triggered when the DOM is updated unless we provide
dependency array.

## 05. React Enhancements

`useEffect` is integratd with `useState` or `useReducer`.

### Effect Dependency Array

If we create a `useEffect` without a dependency array, it will trigger after
any update in the DOM.

We can add a list a variables to `useEffect` so it is only triggered when a
specific state is changed.

### Fetching Data with useEffect

We can create a Component which inputs a `login` username.

### Reducer

A reducer takes in a current state and returns a new state.

We can use this to make our checkbox toggle more efficient.

onChange={toggle}

### Deploying a React App

We can use `npm run build` to build a production application.

The `build/` folder contains our minified packaged app.

It can be served using `serve`

`npm install -g serve; serve build/` or `npm install serve; npx serve build/`

Notice that it will serve your app as a production build.
