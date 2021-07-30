import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Link to='/users/420'>The Greatest User</Link><br />
        <Link to='/About' >The Greatest About Page</Link><br />
        <Link to='/secretPage'>Descubra o segredo da vida</Link>
      </div>
    );
  }
}

export default Home;
