import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect, useReducer} from 'react';

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

// Lakes Component (using arrays of objects)
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

// GitHub Component (using API calling effects)
function GitHubUser({login}){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  if(data){
    return (
      <>
        <p>User: {data.login}</p>
        <img src={data.avatar_url} width={100} alt="avatar_image"/>
      </>
    )
  }
  return null
}

// Checkbox Component (using a toggle function Reducer)
function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      {checked ? "Checked" : "Not Checked"}
    </label>
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

  // Effect with dependency array
  const [myVal, setMyVal] = useState("a");
  useEffect(() => {
    console.log(`myValue: ${myVal}`);
  }, [myVal]);

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

      <label>
        <input
          type="checkbox"
          checked={checked}
          id="checkbox"
          onChange={() => setChecked(checked => !checked)}
        />
        {checked ? "Checked" : "Not Checked"}
      </label>

      <h2>Effect on Input Status</h2>
      <label>
        Value:
        <input
          value={myVal}
          onChange={e => setMyVal(e.target.value)}
        />
      </label>

      <h2>Effect with API Call</h2>
      <GitHubUser login="github"/>

      <h2>Checkbox with Reducer to Manage State Toggle</h2>
      <Checkbox/>
    </>
  )
}

// Render the app
ReactDOM.render(
  <App season="summer"/>,
  document.getElementById('root')
);
