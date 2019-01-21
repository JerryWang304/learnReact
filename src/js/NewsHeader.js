// HackerNews 新闻列表头部，包含logo、导航栏和登录入口
import "../css/NewsHeader.css"
import React from 'react'
import Logo from '../resource/y18.gif'
const hackerNewsLink = "https://news.ycombinator.com/";
export default class NewsHeader extends React.Component {
    // logo部分
    getLogo() {
        return (<div className="newsHeader-logo">
            <a href={hackerNewsLink}> <img src = {Logo} /> </a>
            </div>
        )
    }
    // 标题部分
    getTitle() {
        return (
            <div className="newsHeader-title">
                <a className="newHader-textLink" href={hackerNewsLink}>
                Hacker News
                </a>
            </div>
        )
    }
    // 导航栏部分

    getNav() {
        const navLinks = [
            {
                name : 'new',
                url : 'newest'
            },
            {
                name : 'comments',
                url : 'newcomments'
            },
            {
                name : 'show',
                url : 'show'
            },
            {
                name : 'ask',
                url : 'ask'
            },
            {
                name : 'jobs',
                url : 'jobs'
            },
            {
                name : 'submit',
                url : 'submit'
            }
        ];
        return (
            <div className='newsHeader-nav'>
            {
                navLinks.map(function(navLink){
                    return (
                        <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" 
                          href={hackerNewsLink+navLink.url}>
                        {navLink.name}  
                        </a>
                    )
                })
            }
            </div>
        )
    }

    // 登录页面
    getLogin() {
        return (
            <div className="newsHeader-login">
                <a className="newsHeader-textLink" href={hackerNewsLink+"login?goto=news"}>
                   Login
                </a>
            </div>
        )
    }

    render () {
        return (
            <div className="newsHeader">
              {this.getLogo()} 
              {this.getTitle()}
              {this.getNav()}
              {this.getLogin()}
            </div>
        )
    }
}