import React, { Component } from './components/MyReactDiff';
import ReactDOM from './components/MyReactDiff/react-dom';

import './index.css';

class ClassComp extends Component {
  static defaultProps = {
    color: 'blue'
  };
  render() {
    return (
      <div className="border">
        我是一个{this.props.myName}
        <h2 className={this.props.color}> 根据简版Fiber架构，实现class类式组件渲染！</h2>
      </div>
    );
  }
}

const FunComp = function (props) {
  return (
    <div className="border">
      我是一个{props.myName}
      
    </div>
  );
}

const jsx = (
  <div className="page vdom">
    <h1>自定义现实简版 React、简版Fiber架构</h1>
    <hr />
    <pre>
      <div className="border">
        <b>1、文本节点、HTML元素节点渲染</b>
        <a href="https://react.docschina.org/docs/getting-started.html">常见问题：react virtual dom是什么？说一下diff算法？</a>
      </div>
     
      <b>2、函数式组件渲染</b>
      <FunComp myName="function组件"></FunComp>

      <b>3、类式组件渲染</b>
      <ClassComp myName="class组件" color="green"></ClassComp>

      {/* <b>4、数组 列表渲染</b>
      <ul>
        {['HTML5', 'CSS3', 'ES6', 'React', 'Vue', 'Anguar'].map((item, index, arr) => {
            return ( <li key={item}>{item}</li>  )
        })}
      </ul>

       <b>5、React.Fragment渲染</b>
       <></> === <React.Fragment></React.Fragment> 
      <React.Fragment>
        <h2>React.Fragment</h2>
      </React.Fragment> */}
    </pre>
    <h3>简版React 中，实现以上功能主要核心方法：React.createElement()、ReactDOM.render()、Component</h3>
  </div>
);
ReactDOM.render(jsx, document.getElementById('root'))