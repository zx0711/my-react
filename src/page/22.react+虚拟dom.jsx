/*
 * @Description: context API
 * @Author: xiao.zhang
 * @Date: 2020-08-31 10:59:12
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-26 22:26:00
 */
import React, { Component } from 'react'

class TestVirDom extends Component {
  render() {
    const testHtml = (
      <div className="title">
        <span>Hello ConardLi</span>
        <ul>
          <li>苹果</li>
          <li>橘子</li>
        </ul>
      </div>
    )
    console.log('虚拟dom', testHtml)
    return <div>{testHtml}</div>
  }
}

export default TestVirDom
