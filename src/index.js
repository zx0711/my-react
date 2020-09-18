/*
 * @Description: 
 * @Author: xiao.zhang
 * @Date: 2020-09-18 11:01:18
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-18 11:05:19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// 如果你有内容是需要缓存的,帮你缓存起来
serviceWorker.unregister();

// 总结：
// 一个元素只能有一个根节点，使用jsx写法，可以创建js元素对象
// jsx元素对象或者组建对象，必须只要1个根节点
// const test = <h1>nihao</h1><span>这是span</span>是不对的


// 在react里面写的js语言都是jsx
// 优点
// 1，jsx执行更快，对编译js代码进行优化
// 2，编译过程如果出错 就不能编译 及时发现错误
