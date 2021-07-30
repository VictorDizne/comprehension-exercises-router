import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class StrictAcess extends Component {
  render() {
    const { name, senha } = this.props;
    if ( name === 'joao' && senha ===  1234 ) {
      return (
        <div>
          <h1>Congrats {name}, you have special acess</h1>
          <Link to='/'>Forget the truth</Link>
        </div>
      )
    }
    else {
      alert('Acess Denied');
      return <Redirect to='/'/>
    }
  }
};

export default StrictAcess