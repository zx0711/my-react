/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-09-23 14:05:25
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-30 15:18:26
 */
// createStore => store
// store => dispatch => action => reducer
// store =>  getState, dispatch,subscribe
function createStore(stateChanger) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({})
  return { getState, dispatch, subscribe }
}

export { createStore }
