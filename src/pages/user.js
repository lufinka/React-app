import React, { Component } from 'react';
import Footer from '../components/footer';
import {
    getLocalStorage
} from '../server/tool.js'
import axios from 'axios'
import rem from '../server/rem.js'
import '../style/user.css'
import {
    getUserTipInfo
} from '../server/getDate.js'
import user_header from '../images/usercenter/user_header.png';
import {
    Link
} from 'react-router-dom'
export default class user extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            token:getLocalStorage('token'),
            nick:getLocalStorage('username'),
            enterpriseName:getLocalStorage('enterpriseName'),
            userInfo:{}
        };
    }
    // 获取数据
    componentDidMount() {
        getUserTipInfo(axios).then((response) => {
            console.log(response)
            if(response.data.data){
                this.setState({
                    userInfo: response.data.data
                });
            }
        }, (response) => {
            console.log(response)
        })
    }

    render(){
    return(
        <div className="user">
            <section className="top-banner">
                <div className="wrapInfo">
                    <img src={user_header} alt="" />
        {this.state.token ?
                    <div>
                        <Link to="/login" className="btn_config">登录/注册</Link>
                    </div>
        :
        <div>
                    <div className="username">{this.state.nick}</div>
                    <div className="enterpriseName">{this.state.enterpriseName}</div>
                    </div>
        }
                </div>
            </section>
            <section className="myOrder">
                <div className="all">
                    <Link to="/vorder/dfk">
                        全部订单<span></span>
                    </Link>
                </div>
                <div className="four">
                    <ul>
                        <li>
                           <Link to="/vorder/dfk">
                            <h3>{this.state.userInfo.unPayNumber}</h3>
                            <p>待付款</p>
                            </Link>
                        </li>
                        <li>
                           <Link to="/vorder/dfh">
                            <h3>{this.state.userInfo.deliverNumber}</h3>
                            <p>待发货</p>
                            </Link>
                        </li>
                        <li>
                           <Link to="/vorder/dsh">
                            <h3>{this.state.userInfo.reciveNumber}</h3>
                            <p>待收货</p>
                            </Link>
                        </li>
                        <li>
                           <Link to="/vorder/jsbh">
                            <h3>{this.state.userInfo.unRejRep}</h3>
                            <p>拒收&#92;补货</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="into-list">
                <ul>
                    <li>
                       <Link to="/vmanage">
                          <i className="address"></i>
                           <p>收货地址</p>
                           <span></span>
                       </Link>
                    </li>
                    <li>
                       <a href="tel:4009215767">
                          <i className="kf"></i>
                           <p>联系客服</p>
                           <span></span>
                       </a>
                    </li>
                    <li className="notice">
                       <Link to="/often_list">
                          <i className="often_list"></i>
                           <p>常购清单</p>
                           <span></span>
                       </Link>
                    </li>
                    <li>
                       <Link to="/often_shop">
                          <i className="often_shop"></i>
                           <p>常购商家</p>
                           <span></span>
                       </Link>
                    </li>
                    <li>
                       <Link to="/set">
                          <i className="set"></i>
                           <p>设置</p>
                           <span></span>
                       </Link>
                    </li>
                </ul>
            </div>
            <Footer focus="3"></Footer>
        </div>
        )
}
}