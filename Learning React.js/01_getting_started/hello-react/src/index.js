import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LAKELIST = [
  {id: 1, name: "Echo Lake"},
  {id: 2, name: "Maud Lake"},
  {id: 3, name: "Cascade Lake"}
]

// Hello Component
function Hello({foo, hoo, num}){
  return (
    <>
      <p><b>Welcome to react!!!</b></p>
      <p>{foo}-{hoo}-{num}</p>
      <p><em>Isn't this awesome?!</em></p>
    </>
  )
}

// Lakes Component
function Lakes({lakes}){
  return (
    <>
      <b>Lakes:</b>
      <ul>
        {lakes.map(lake => <li key={lake.id}>{lake.name}</li>)}
      </ul>
    </>
  )
}

// Base Component
function App({ lakes, season }){

  // Context info
  let city = {
    name: "Madrid",
    country: "Spain"
  };

  // Conditionals
  var see;
  if (season === "summer"){
    see = <p>See the lakes!</p>
  }else{
    see = <p>See the ski resort!</p>
  }

  // App JSX
  return (
    <>
      <h1 id="heading" className="cool"> Hello World!</h1>
      <h2>Basic JSX</h2>
      <ul>
        <li>Dog</li>
        <li>Cat</li>
        <li>Hamster</li>
      </ul>
      <p>{city.name} is in {city.country}</p>
      <h2>Basic Component</h2>
      <Hello
        foo="bar"
        hoo="raa"
        num={3}
      />
      <h2>List of Items</h2>
      <Lakes lakes={LAKELIST}/>
      <h2>Conditional Rendering</h2>
      {see}
    </>
  )
}

// Render the app
ReactDOM.render(
  <App season="summer"/>,
  document.getElementById('root')
);
