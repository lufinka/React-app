import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'

const footer = () => {
    return (
        <footer className="footer">
            <ul className="bot_menu_ul">
                <li>
                    <Link to="index.html" title="">
                        <span className="nav_ico nav_ico1"></span>
                        <span className="world">首页</span>
                    </Link>
                </li>
                <li className="on">
                    <Link to="/classify" title="">
                        <span className="nav_ico nav_ico2"></span>
                        <span className="world">分类</span>
                    </Link>
                </li>
                <li>
                    <Link to="shopcar.html" title="">
                        <span className="shop_car nav_ico nav_ico3">
                <i className="shop_count">3</i>
              </span>
                        <span className="world">购物车</span>
                    </Link>
                </li>
                <li>
                    <Link to="user_center.html" title="">
                        <span className="nav_ico nav_ico4"></span>
                        <span className="world">我</span>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
export default footer;