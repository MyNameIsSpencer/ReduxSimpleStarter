import React from 'react';
import ReactDOM from 'react-dom';


// Create new component that should create some HTML
const App = () => {
  return <div> Hi! </div>;
}



// Take component's HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
