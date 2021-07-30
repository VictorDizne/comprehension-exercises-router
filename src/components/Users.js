import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> {greetingsMessage} my user number {this.props.match.params.id}, check my awesome Users component </p>
        <Link to='/'>Return Home</Link>
      </div>
      
    );
  }
};

export default Users;
