import React, { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component {

  render() {
    return <div>
      <nav className="nav_container">
        <div className="logo">
          <img src={require('../../images/logo3.png')} />
        </div>
        <ul className="items">
          <li><a href="">Features</a></li>
          <li><a href="">Plans</a></li>
          <li><a href="">Organizations</a></li>
          <li><a href="">Browse courses</a></li>
          <li><a href="">Support</a></li>
        </ul>

        <select className="alternative_bar">
          <option value={0}>Features</option>
          <option value={1}>Plans</option>
          <option value={2}>Organizations</option>
          <option value={3} >Browse courses</option>
          <option value={4}>Support</option>
        </select>

        <div className="buttons">
          <button className="default">Sign in</button>
          <button className="default trial_button">7 day trial</button>
        </div>
      </nav>
    </div>
  }
}
