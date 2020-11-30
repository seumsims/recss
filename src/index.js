import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Contact from './pages/Contact';
import Porfolio from './pages/Portfolio';
import Jsonrest from './pages/Jsonrest';
import Post from './pages/Post';
import {Route,Link, BrowserRouter as Router} from '../node_modules/react-router-dom';


const myrouter = (
  
  <Router>
    <div className="container border border-warning">
    <nav className="navbar navbar-light bg-light">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/jsonrest">Jsonrest</Link>
      <Link to="/post">Post</Link>
    </nav>

    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Porfolio} />
    <Route path="/jsonrest" component={Jsonrest} />
    <Route path="/post" component={Post} />

  </div>
  </Router>
);

ReactDOM.render(myrouter, document.getElementById('root'));

/*

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
