import React, {Component} from 'react'
import Footer from '../components/footer'
import '../style/classify.css'
import axios from 'axios'
import {
    listCategory
} from '../server/getDate.js'
import {
    Link
} from 'react-router-dom'

export default class classify extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data: {},
            leftContent: [],
            now:0,
            toggle:!1,
            keyword:''
        }
    }

    tabs(index) {
        this.setState({
            now: index,
            toggle:!1
        });
    };

    togg() {
        this.setState({
            toggle:!this.state.toggle
        });
    };

    //搜索产品
    setKeyword(e){
        this.setState({
            keyword: e.target.value
        });
    }

    search(e){
        if(e.keyCode === 13){
            this.props.history.push('/result/'+e.target.value)
        }
    }

    // 获取数据
    componentDidMount() {
        listCategory(axios).then((response) => {
            console.log(response)
            this.setState({
                data: response.data.data
            });
        }, (response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className="container wrapper web">
                <header className="header">
                    <div className="search_contaienr">
                        <input id="search_input" value={this.state.keyword} onChange={this.setKeyword.bind(this)} onKeyDown={this.search.bind(this)} className="search_input" type="search" placeholder="药品名/拼音缩写/厂家"  />
                    </div>
                </header>
                <div className="classify">
                    {
                        (this.state.data.category && this.state.data.category.length) &&
                            <div className="classify_box">
                            <div className="classify-tab ui_verscrollpl">
                                <div className="cont">
                                    <i className="strip" style={{top:this.state.now * 1.24 + 'rem'}}></i>
                                    <ul>
                                        {this.state.data.category.map((item, index) => (
                                            <li onClick={this.tabs.bind(this,index)} key={index} className={this.state.now === index ? 'active' : ''}>{item.categoryName}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="classify-right">
                            {
                                this.state.data.category.map((value, i) => (
                                    <div key={i} className={this.state.now === i ? 'classify-content animated ui_verscrollpl active' : 'classify-content animated ui_verscrollpl'}>
                                        <div className="classify-wrapper">

                                            {value.activityPic&&
                                            <div className="add-pic" data-activityUrl={value.activityUrl} data-activityUrlApp={value.activityUrlApp}>
                                                <a><img src={value.activityPic} alt="" /></a>
                                            </div>
                                            }
                                            {value.showCard === 0 && value.cardCategory && value.cardCategory.length&&
                                            <div className="category" style={{paddingBottom:value.cardCategory.length>6?'0.4rem':'10px'}}>
                                                <ul style={{maxHeight:this.state.toggle?(Math.ceil(value.cardCategory.length / 3) * 40 + 10) / 37.5 + 'rem':'1.6rem'}}>
                                                    {value.cardCategory.map((item, n) => (
                                                        <li className={ n === 0 ? 'active':''} key={n}>
                                                            <a href={'#'+item.categoryCode}>{item.categoryName}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {value.cardCategory && value.cardCategory.length > 6&&
                                                <div className={this.state.toggle ?'toggle-btn rotate':'toggle-btn'} onClick={this.togg.bind(this)}>
                                                    <i></i>
                                                </div>
                                                }
                                            </div>
                                            }
                                            { value.secondCategory && value.secondCategory.length &&
                                            <div className="category-wrapper">
                                                {
                                                    value.secondCategory.map((item, n) => (
                                                        <dl key={n} name={item.categoryCode} id={item.categoryCode}>
                                                            <dt>{item.categoryName}</dt>
                                            {item.thirdCategory && item.thirdCategory.length &&
                                                <div className="cont">
                                                {
                                                    item.thirdCategory.map((val, m) => (
                                                        <dd key={m}>
                                                            <Link to={{pathname:"/result",search: '?keyword='+item.categoryCode}}>
                                                                <img src={val.activityPic} alt=""/>
                                                                <p>{val.categoryName}</p>
                                                            </Link>
                                                        </dd>
                                                    ))
                                                }
                                                </div>
                                            }
                                        </dl>
                                                ))
                                                }
                                    </div>
                                        }
                                </div>
                                 </div>
                            ))}
                          </div>
                 </div>
                }
                </div>
                <Footer focus="1"></Footer>
            </div>
        )
    }
}