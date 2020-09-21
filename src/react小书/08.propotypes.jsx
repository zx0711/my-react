import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  //判断数据类型
  static propTypes = {
    comment: PropTypes.object.isRequired // 必选，而且还是对象类型
  }
  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

class App extends Component{
  render(){
    return <Comment comment={{username: 'zx'}}></Comment>
  }
}
export default App