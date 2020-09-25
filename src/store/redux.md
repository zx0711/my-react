<!--
 * @Description: Redux
 * @Author: xiao.zhang
 * @Date: 2020-09-25 11:09:37
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-25 11:24:48
-->
### 1，Redux 是一种架构模式，他可以和任意组合，比如react,vue,jquery。 而react-redux就是把redux这种架构模式和react.js结合起来的一个库。就是redux架构在react.js中的体现。

### 2，不同的模块之间确实需要共享数据，而且这些模块还可能需要修改这些共享数据。但是 如果被修改也会带来“数据可能被任意修改导致不可预料的结果”这种矛盾。

### 3，然后就出现了提高门槛这一说法。也就是：模块（组件）之间可以共享数据，也可以改数据。但是我们约定，这个数据并不能直接改，你只能执行某些我允许的某些修改，而且你修改的必须大张旗鼓地告诉我

### 4，dispatch就是专门负责数据的修改
```
function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}
```