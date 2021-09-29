/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2019-09-19 14:50:16
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-09-19 22:19:39
 */
import React from 'react'
// import { Provider } from 'mobx-react'
// import store from './mobxStore/index'
// import ContextExample from './react小书/12.contextExample'
// import ContextExample from './react小书/14.newContext'
import './App.css'
import Styles from './App.module.css'
import Imags from './active.png'
import HtmlDiff from './html-diff.png'
import { TestFunc } from './test.tsx'
import TestCss from './test.css'

console.log('1个是加module的css,一个是没加module的css', Styles, TestCss)

/**
 * webpack配置好文链接：
 * https://juejin.cn/post/6844903853905674248
 */
function App() {
  let flag = false
  return (
    // <PrototypeExample></PrototypeExample>
    <div>
      <div className="title">你好，我想测试webpack1111</div>
      <div className={Styles.titleTest}>我想测试css module</div>
      <img src={Imags} alt=""></img>
      <img src={HtmlDiff} alt=""></img>
      <TestFunc></TestFunc>
      <div
        className={TestCss.colorTest}
        onClick={() => {
          console.log('不点击加载吗')
          // flag ? TestCss.use() : TestCss.unuse()
        }}
      >
        使用style-loader提供的方法
      </div>
      {/* 把mobx整体注入到react中去 */}
      {/* <Provider store={store}></Provider> */}
      {/* <ContextExample></ContextExample> */}
    </div>
  )
}

export default App
