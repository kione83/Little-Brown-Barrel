import './App.css';
import React from 'react';
import Layout from './Layout';
import Whiskey from './Whiskey';
import About from './About';
import Card from './Card';
import Admin from './Admin';

function App() {
  // let component;
  // switch(window.location.pathname) {
  //   case "/": 
  //     component = App;
  //     break;
  //   case "/whiskey":
  //     component = Whiskey;
  //     break;
  //   case "about":
  //     component = About;
  //     break;
  //   default:
  //     component = App;
  
  return (
    <div className="App">
      <Layout/>
      {/* <Card/> */}
      <Admin/>
    </div>
  );
}

export default App;
