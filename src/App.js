import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          {/* By using the Switch tag it will look at the URL and go down the stack of endpoint paths and go one by one and checl if it matches what we need, (i.e. '/contact') when it finds a match it loads that component and stops searching there*/}
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/:post_id' component={ Post } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
