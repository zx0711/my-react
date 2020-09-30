import React, { Component } from 'react'

class Title extends Component {
  handleClickOnTitle(ss, e) {
    console.log('this', ss)
    console.log(e.target.innerHTML)
  }

  render() {
    return (
      // <h1 onClick={(e)=>{this.handleClickOnTitle(this,e)}}>React 小书</h1>
      <div>
        {[
          <span key={1}>React.js </span>,
          <span key={2}>is </span>,
          <span key={3}>good</span>,
        ]}
      </div>
    )
  }
}

export default Title
