import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect } from 'react';

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

  // States
  const [status, setStatus] = useState("Opened");
  const [manager, setManager] = useState("Jotaro");
  const [checked, setChecked] = useState(true);
  //useEffect(() => {
  //  alert(`checked: $checked.toString()`)
  //});

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
      <h2>States and useEffect</h2>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("Closed")}>Close</button>
      <button onClick={() => setStatus("Opened")}>Open</button>
      <p>Manager: {manager}</p>
      <input type="text" id="newManager" name="newManager"></input>
      <button onClick={() => setManager("Dio")}>Change manager</button>
      <p>Checkbuton:</p>
      <input
        type="checkbox"
        checked={checked}
        id="checkbox"
        onChange={() => setChecked(checked => !checked)}
      />
      <label for="checkbox">{checked ? "Checked" : "Not Checked"}</label>
    </>
  )
}

// Render the app
ReactDOM.render(
  <App season="summer"/>,
  document.getElementById('root')
);
