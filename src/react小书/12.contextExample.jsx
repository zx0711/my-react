/*
 * @Description:过时的Context
 * @Author: xiao.zhang
 * @Date: 2020-10-09 11:02:48
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-09 11:44:08
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string,
    name: PropTypes.string,
  }

  constructor() {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext() {
    console.log('每次state和props发生变化的时候，就会触发getChildContext')
    return { themeColor: this.state.themeColor, name: 'xiaoxiao' }
  }

  changeColor = () => {
    this.setState({ themeColor: 'yellow' })
  }

  render() {
    return (
      <div>
        <div onClick={this.changeColor}>dianji</div>
        <Header />
        <Main />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h2>This is header</h2>
        <Title />
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is main</h2>
        <Content />
      </div>
    )
  }
}

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    name: PropTypes.string,
  }

  render() {
    console.log('========context=====', this.context)
    return <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2>React.js 小书内容</h2>
      </div>
    )
  }
}

// ReactDOM.render(<Index />, document.getElementById('root'))
export default Index
