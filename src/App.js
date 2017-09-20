import React, { Component } from 'react';
import logo from './images/logo.png';
import './style/login.css';
import './style/normalize.css';
import './server/rem'
import 'antd-mobile/lib/tab-bar/style/index.css';
import { Button } from 'antd-mobile';
import axios from 'axios'
import {
    headers,
    userLogin
} from './server/getDate.js'
import {
    setLocalStorage
} from './server/tool.js'
import { createStore } from 'redux'

function counter(state = 0, action) {
  if(action.type == 'INCREMENT'){
    return state + 1;
  }else if(action.type == 'DECREMENT'){
    return state + 11;
  }else{
    return state;
  }
}
 
let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      userName: '',
      password: '',
      ishow: "none",
      itype: 'password',
      btn_state:"btn_look look_hide"
    }
  }
  componentDidUpdate() {
  }
    userLogin () {
        if (this.state.userName.length >= 6 && this.state.password.length >= 6 && /([a-zA-Z0-9_-]){6,20}$/.test(this.state.userName)) {
            axios.post(
                '/passport/api/user/userLogin', {
                    'username': this.usernameVal,
                    'password': this.passwordVal
                }, {
                    headers: headers
                }
            ).then((response) => {
                var data = response.data.data;
                var self = this;
                if (data.result == 0) {
                    setLocalStorage('city_name', data.stationName);
                    setLocalStorage('city_id', data.station);
                    setLocalStorage('token', data.token);
                    setLocalStorage('result', data.result);
                    setLocalStorage('username', data.userName);
                    setLocalStorage('avatarUrl', data.avatarUrl);
                    setLocalStorage('enterpriseName', data.enterpriseName);
                    setLocalStorage('nameList', data.nameList);
                    this.setUser({
                        username: this.state.userName,
                        password: this.state.password
                    });
                    this.$toast({
                        message: '登录成功',
                        position: 'bottom',
                        duration: 2000
                    });
                    setTimeout(function () {
                        self.$router.push('home')
                    }, 1000)
                } else {
                    this.$toast({
                        message: data.remark,
                        position: 'bottom',
                        duration: 2000
                    });
                }
            }, (response) => {
                console.log(response)
            })
        }
    }

  setUserName(ev) {
    this.setState({
      userName: ev.target.value
    }, () => {
      this.setState({
        ishow: this.state.userName ? "block" : "none"
      });
    });
  }
  clearUserName(ev) {

    this.setState({
      ishow: "none",
      userName: ""
    });

  };
  setType(ev) {
    this.setState({
      itype: this.state.itype == "password" ? "text" : "password"
    }, () => {
      this.setState({
        btn_state: this.state.itype == "password" ? "btn_look look_hide" : "btn_look"
      });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="base_header">登录</div>
        <h1 className="logo">
          <img src={logo} alt="" />
        </h1>
        <div className="login_container">
          <div className="afterLine">
            <input type="text" value={this.state.userName} ref="inputUsername" name="username" onFocus={this.setUserName.bind(this)} onChange={this.setUserName.bind(this)} className="login_username" placeholder="用户名" />
            <i className="btn cleari" onClick={this.clearUserName.bind(this)} style={{ display: this.state.ishow }}></i>
          </div>
          <div className="afterLine">
            <input type={this.state.itype} defaultValue={this.state.password} name="password" className="input_password" placeholder="密码" />
            <i className={'btn'+' '+this.state.btn_state} onClick={this.setType.bind(this)}></i>
          </div>
          <p className="forget_password">
            <span className="login_error">用户名或者密码错误，请重试</span>
            <a to="/forgetpsw">忘记密码？</a>
          </p>
          <a className="btn_next btn_submit btn_next_ok" onClick={this.userLogin.bind(this)}>登录</a>
          <a className="btn_next btn_register" to="/register">注册</a>
            <Button>Start</Button>
        </div>
      </div>
    );
  }
}

export default App;
