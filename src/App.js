import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Switch } from 'react-router-dom'
import { Route } from 'react-router'
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning'/>}/>
          <Route path='/secretPage' render={() => <StrictAcess name='joao' senha={1234}/>}/>
          <Route path='/about' component={About}/>
          <Route exact path='/' component={Home}/>
          <Link to='/secretPage'>Descubra o segredo da vida</Link>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
