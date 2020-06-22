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

`public/index.html` is our main webpage. It contains a `<div id="root"></div>` which contains our app.

`scr/index.js` renders your React app. It contains a `ReactDOM.render` function, where we


```js
ReactDOM.render(
  React.createElement(
    "h1", { style: {color:"blue"}}, "...elements or text..."),
  document.getElementById('root')
);
```

Using `React.createElement` to create all of our elements can be unwieldy (especially in lists), so JSX was created (HTML syntax).

```js
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li>Dog</li>
      <li>Cat</li>
      <li>Hamster</li>
    </ul>
  </div>,
  document.getElementById('root')
);
```
