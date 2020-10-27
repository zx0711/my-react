/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2019-09-19 14:50:16
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-26 22:24:37
 */
import React from 'react'
// import { Provider } from 'mobx-react'
// import store from './mobxStore/index'
// import ContextExample from './react小书/12.contextExample'
// import ContextExample from './react小书/14.newContext'
import ReactVirDom from './page/22.react+虚拟dom'
// import './App.css'

// 函数式组建
function App() {
  return (
    // <PrototypeExample></PrototypeExample>
    <div>
      {/* 把mobx整体注入到react中去 */}
      {/* <Provider store={store}></Provider> */}
      {/* <ContextExample></ContextExample> */}
      <ReactVirDom></ReactVirDom>
    </div>
  )
}

export default App
