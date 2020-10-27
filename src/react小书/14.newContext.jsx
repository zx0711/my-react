import React from 'react'
import { Button } from 'antd'

const ThemeContext = React.createContext('light')

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={'red'}>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext
  render() {
    return <Button>{this.context}</Button>
  }
}

export default App
