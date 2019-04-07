import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      // sets up the application so it can use different routes
      //  whenever the user goes to this endpoint (path) than load in this component
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/:post_id' component={ Post } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
