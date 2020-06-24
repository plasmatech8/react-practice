import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library'


let bookList = [
  {title:"The Sun Also Rises", author:"Ernest Hemingway", pages:260},
  {title:"JoJo's Bizarre Adventures", author:"Jotaro"},
  {title:"Rich Dad Poor Dad", author:"Robert T. Kiyosaki", pages:207},
];

ReactDOM.render(
  <Library books={bookList}/>,
  document.getElementById('root')
);
