import '../css/app.css';
import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import $ from  'jquery';

function get(url) {
    return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
  return Promise.all(stories.slice(0, 30).map(itemId => 
    get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
    ReactDom.render(<Root items={items} />, document.getElementById('root'));
}).catch(function(err) {
  console.log('error occur', err);
});

// ReactDom.render(
//     <Root></Root>,
//     document.getElementById('root')
// );

