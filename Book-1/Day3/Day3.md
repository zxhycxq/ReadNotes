###组件的生命周期

装载mount、更新update、卸载UNmount

####constructor
并非每个组件都要定义自己的构造函数，无状态的react自己就不需要。

一个react自己若需要构造函数，主要是为了
* 初始化state
* 绑定成员函数this

getInitialState和getDefaultProps两个方法在es6方法定义的组件中用不到。

```javascript
class Sample extends React.Component({
    constructor(prop){
        super(prop)
        this.state={
        foo:'bar',
        }
    }
})

Sample.defaultProps={
    return {left:0}
}

```
####render

所有react组件的父类React.Component类对除render之外的生命周期函数都有默认实现。

render函数并不做实际的渲染动作（本身并不往 DOM 树上渲染或者装载内容），只是返回一个jsx描述的结构，最终由 React 库来根据返回对象决定如何渲染。
React 库要把所有组件返回的结果综合起来，才能知道该如何产生对应的 DOM修改 。

render函数应该是一个纯函数，完全根据 this.state 和 this.props 来决定返回的结果，而且不要产生任何副作用。
在 render 函数中去调用 this.setState是错的。

#### componentWillMount 和 componentDidMunt

即使调用this.setState也不会引发重新绘制。
render 函数被调用完之后， componentDidMount 函数并不是会被立刻调用，
 componentDidMount 被调用的时候， render 函数返回的东西已 经引发了渲染，组件已经被“装载”到了 DOM 树上

        componentDidMount只能在浏览器端被调用，在服务器端使用 React 的时候不会被调用.componentWilIMount都可以
