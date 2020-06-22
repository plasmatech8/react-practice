import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component (alternatively can pass in a single 'props' object)
function Hello({foo, hoo, num}){
  return (
    <div>
      <p><b>Welcome to react!!!</b></p>
      <p>{foo}-{hoo}-{num}</p>
      <p><em>Isn't this awesome?!</em></p>
    </div>
  )
}

// Example of information insertion
let city = {
  name: "Madrid",
  country: "Spain"
};

// Render the app
ReactDOM.render(
  <div>
    <h1 id="heading" className="cool"> Hello World!</h1>
    <ul>
      <li>Dog</li>
      <li>Cat</li>
      <li>Hamster</li>
    </ul>
    <p>{city.name} is in {city.country}</p>
    <Hello
      foo="bar"
      hoo="raa"
      num={3}
    />
  </div>,
  document.getElementById('root')
);
