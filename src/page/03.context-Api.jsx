/*
 * @Description: context API
 * @Author: xiao.zhang
 * @Date: 2020-08-31 10:59:12
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-02 17:11:42
 */
import React, { Component } from 'react'
import { Button } from 'antd'
// react context 听起来是 父组建不需要一层一层传给子组建，孙子组建通过 context 可以拿到父组建的内容
// 代码如下：
const ThemeContext = React.createContext('light');
class ContextApi extends Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} >{this.context}</Button>;
  }
}

export default ContextApi

// 适用的场景：很多不同层级的组件需要访问同样一些的数据可以适用。 这会使得组件的复用性变差
// 
// 一层一层传递的例子
{/* <div>
  <A user = {'zx'} avatarSize={30}></A>
</div>

class A extends Component{
  render(){
    const { user,avatarSize } = this.props
    return <B user={user} avatarSize={avatarSize} />
  }
}

class B extends Component{
  render(){
    const { user,avatarSize } = this.props
    return <C user={user} avatarSize={avatarSize} />
  }
}

class C extends Component {
  render(){
    const { user,avatarSize } = this.props
    return <Link href={user.permalink} avatarSize ={avatarSize}>
  </Link>
  }
} */}

// 组件组合（component composition）有时候是一个比 context 更好的解决方案
// 例子
{/* <div>
  <A user = {'zx'} avatarSize={30}></A>
</div>

function A(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />
}

class PageLayout extends Component{
    render(){
      const { userLink } = this.props
      return <NavigationBar userLink={userLink} />
    }
}
class NavigationBar extends Component{
    render(){
      const { userLink } = this.props
      return userLink
    }
} */}


// redux, react-router都很依赖context API
// 我们可以自己写组件的时候使用一下新的context API
// 无论是哪个子节点，都可以通过context 访问根上的值
// 根称之为provide
// 下面的不论哪一层的子节点称之为consume


