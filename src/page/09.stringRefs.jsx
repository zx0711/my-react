/*
 * @Description: string类型的ref
 * @Author: xiao.zhang
 * @Date: 2020-09-07 13:50:34
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-07 13:53:55
 */
import React from "react";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.focusTextInput = () => {
      console.log("this.textInput1", this.refs.textrefs.value);
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.refs.textrefs) this.refs.textrefs.focus();
    };
  }

  componentDidMount() {
    console.log("先走哪一个1", this.textInput);
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input type="text" ref="textrefs" />
        <input
          type="button"
          value="Focus the text input111"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;
