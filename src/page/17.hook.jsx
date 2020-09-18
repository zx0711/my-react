/*
 * @Description: hook例子
 * @Author: xiao.zhang
 * @Date: 2020-09-08 14:26:12
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-08 19:37:32
 */
import React, { useState, useEffect } from 'react';

// function Example() {
//   // 声明一个叫 “count” 的 state 变量。
//   // 可以声明多个state变量
//   const [count, setCount] = useState(2);
//   // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

//   // 相当于 componentDidMount 和 componentDidUpdate:
//   useEffect(() => {
//     // 使用浏览器的 API 更新页面标题
//     document.title = `You clicked ${count} times111`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Example

function FriendStatus(props){
  const isOnline = useFriendStatus(props.friend.id)
  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

// 自定义hook useFriendStatus
// import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}