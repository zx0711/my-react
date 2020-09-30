/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2019-09-19 14:50:16
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-30 15:57:30
 */
import React from 'react'
import { Provider } from 'mobx-react'
import store from './mobxStore/index'
// import './App.css'
// 函数式组建
function App() {
  return (
    // <PrototypeExample></PrototypeExample>
    <div>
      {/* 把mobx整体注入到react中去 */}
      <Provider store={store}></Provider>
    </div>
  )
}

export default App
