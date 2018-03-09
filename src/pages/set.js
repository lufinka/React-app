import React,{ Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { Button } from 'antd-mobile'
import {
    setLocalStorage
} from '../server/tool.js'
import '../style/user.css'
import {
    Link
} from 'react-router-dom'
    
export default class set extends Component{
    constructor(...args){
        super(...args);
        this.state = {};
    }
    loginOut(){
        setLocalStorage('token','');
        setLocalStorage('username','');
        window.history.go(-1);
    }
    render(){
    return(
        <div className="set">
            <Header title="设置"></Header>
            <div className="aboutus">
                <Link className="into" to="/about">
                    关于我们<span></span>
                </Link>
            </div>
            <div className="signOut">
                <Button type="primary" onClick={this.loginOut.bind(this)}>退出当前账号</Button>
            </div>
            <Footer focus="-1"></Footer>
        </div>
        )
}
}