import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Courses from './components/courses/courses'

class App extends Component {

  state = {
    inputText: ''
  }

  handleOnchangeInput = ({ target }) => {
    this.setState({ inputText: target.value })

  }
  render() {
    return (<div>
      <Navbar />
      <div className="workspace">
        <div className="blue_bar">
          <div className="box">
            <div className="subtitle">Find CE for a</div>
            <select>
              <option value="" >Florida</option>
            </select>
            <select>
              <option value="" >Medical Doctor</option>
            </select>
          </div>
          <div className="box">
            <div className="search">
              <img src={require('./images/search.PNG')} />
              <input className="search_input" placeholder="Search courses and providers" type="text" value={this.state.inputText} onChange={this.handleOnchangeInput} />
            </div>
          </div>
          <div className="box">
            <ul className="items">
              <li><a >courses</a></li>
              <li><a >providers</a></li>
            </ul>
          </div>
        </div>
        <div className="container">
          <Courses textToSearch={this.state.inputText} />
        </div>
      </div>
    </div>);
  }
}

export default App;
