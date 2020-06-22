# Become a React Developer

## 01. Getting Started with React

Ways to use React:
* Create React App (good for learning or creating single-page web applications)
* Next.js (server rendered website)
* Gatsby (static rendered site)
* React Native with Expo (native applications)

We will initialise a React app (execute node package binaries): `npx create-react-app hello-react --use-npm`

We will either use live server or `npm start` to get started.

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

Using `React.createElement` to create all of our elements can be unwieldy (especially in lists), so JSX was created (HTML syntax).

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