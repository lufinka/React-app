import React, {Component} from 'react'
const footer = () => {
    return (
        <footer className="footer">
            <ul className="bot_menu_ul">
                <li>
                    <a href="index.html" title="">
                        <span className="nav_ico nav_ico1"></span>
                        <span className="world">首页</span>
                    </a>
                </li>
                <li className="on">
                    <a href="classNameify.html" title="">
                        <span className="nav_ico nav_ico2"></span>
                        <span className="world">分类</span>
                    </a>
                </li>
                <li>
                    <a href="shopcar.html" title="">
                        <span className="shop_car nav_ico nav_ico3">
                <i className="shop_count">3</i>
              </span>
                        <span className="world">购物车</span>
                    </a>
                </li>
                <li>
                    <a href="user_center.html" title="">
                        <span className="nav_ico nav_ico4"></span>
                        <span className="world">我</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default footer;