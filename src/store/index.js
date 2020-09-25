/*
 * @Description: 模拟store
 * @Author: xiao.zhang
 * @Date: 2020-09-23 14:05:25
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-23 15:08:05
 */
function createStore(stateChanger) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state;
  const dispatch = (action) => {
     state = stateChanger(state,action);
     listeners.forEach((listener) => listener())
  };
  dispatch({})
  return { getState, dispatch,subscribe };
}

export {
  createStore
}
