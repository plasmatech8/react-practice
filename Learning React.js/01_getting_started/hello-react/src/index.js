import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
