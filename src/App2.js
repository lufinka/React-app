import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd-mobile/lib/button'

var sty = {
  color: 'red',
  fontSize: '24px'
};
var arr = [{ name: 'yukan', age: 27 }, { name: 'kakan', age: 28 }];
var ComponentOne = React.createClass({
  handleClick: function (event) {
    //this.props.name = '1321523';
    console.log(this.props.name)
  },
  render: function () {
    return <h2 onClick={this.handleClick}>{this.props.name}</h2>
  }
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*这里是注释*/}
          <h2 style={sty}>Welcome to React</h2>
          <Button>antd-mobile button</Button>
        </div>
        <ComponentOne name="yukan" />
        <div>
          <ul>
            {
              arr.map(function (item, i) {
                return (
                  <li key={i}>
                    <span>姓名:</span>{item.name} <span>年龄:</span>{item.age}
                  </li>
                );
              })
            }
          </ul>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
