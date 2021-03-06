// 包含newsHeader和newsItem
import React from 'react';
import NewsHeader from './NewsHeader'
import NewsItem from './NewsItem'
import "../css/NewsList.css"
const testData = {
    "by" : "bane",
    "descendants" : 49,
    "id" : 11600137,
    "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
    "score" : 56,
    "time" : 1461985332,
    "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
    "type" : "story",
    "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
  };

export default class Root extends React.Component {
    render() {
        return (
            <div className="newsList">
            <h1>Hello, React!</h1>
            <NewsHeader></NewsHeader>
            <div className="newsList-newsItem">
                {
                    (this.props.items).map(function(item, index){
                        return (
                            <NewsItem key={item.id} item={item} rank={index+1} />
                        )
                    })
                }
            </div>
            </div>
        );
    }
}