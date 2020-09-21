import React, { Component } from 'react'

class LikeButton extends Component {
  // 本节讲 defaultProps，defaultProps里有了默认值，就不用特意对里面的属性做判断了
  // 不用引入任何第三方库，只需要使用defaultProps，这是react自带的
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText} 👍
      </button>
    )
  }
}

export default LikeButton

// 解决了下面要使用||判断的问题

// defaultProps 作为点赞按钮组件的类属性，里面是对 props 中各个属性的默认配置。这样我们就不需要判断配置属性是否传进来了：如果没有传进来，会直接使用 defaultProps 中的默认属性。 所以可以看到，在 render 函数中，我们会直接使用 this.props 而不需要再做判断

// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = { isLiked: false }
//   }

//   handleClickOnLikeButton () {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }

//   render () {
//     const likedText = this.props.likedText || '取消'
//     const unlikedText = this.props.unlikedText || '点赞'
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? likedText : unlikedText} 👍
//       </button>
//     )
//   }
// }