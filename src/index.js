/*
 * @Description: 
 * @Author: xiao.zhang
 * @Date: 2020-09-18 11:01:18
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-24 18:22:51
 */

// 我们既要共享数据，又想修改共享数据，又怕有人乱修改共享数据

// redux 名词： 
// store,
// dispatch：函数，负责人数据的修改，以及页面渲染
// reducer: 纯函数，放在dispatch里调用，返回新的state
// action: 对象，改变的几种类型
// subscribe: 监听
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from './store'

// reducer 减速器; 缩减者，减压器，还原剂;
// 这是一个纯函数
function stateChanger (state,action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }

  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      break
  }
}

function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return 
  console.log('render renderTitle...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return // 数据没有变化就不渲染了
  console.log('render renderContent...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

function renderApp (newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return
  console.log('render app...')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}


const store = createStore(stateChanger)

// 缓存旧的state
let oldState = store.getState()

store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState,oldState)
  oldState = newState
})// 监听dispatch以后的每一次

renderApp(store.getState()) // 首次渲染
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色






// 如果你有内容是需要缓存的,帮你缓存起来
serviceWorker.unregister();

// 总结：
// 一个元素只能有一个根节点，使用jsx写法，可以创建js元素对象
// jsx元素对象或者组建对象，必须只要1个根节点
// const test = <h1>nihao</h1><span>这是span</span>是不对的


// 在react里面写的js语言都是jsx
// 优点
// 1，jsx执行更快，对编译js代码进行优化
// 2，编译过程如果出错 就不能编译 及时发现错误
