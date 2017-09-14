###   以函数为子组件
```
class CountDown extends React.Component {
constructor () {
super (... arguments) ;
this.state = {count: this.props.startCount};
}
}

componentDidMount() {
this . intervalHandle = setinterval(() => {
const newCount = this.state.count - l;
if (newCount >= 0) {
this . setState({count : newCount});
} else {
window.clearinterval(this.intervalHandle);
}' 1000) ;
}

<CountDown startCount={lO}>
(count) => <div>{ count > 0 ? count ： ’ 新年快乐 ’ ｝＜／ d工v>
</CountDown>

render( ) {
return this . props . children (this . state . count) ;
}

```
以函数为子组件”的模式非常适合于制作动画，类似 CountDown 这样的例子决定动画每一帧什么时候绘制，给制的时候是什么样的数据，作为子组件的函数只要专注于使用参数来渲染就可以了 。

缺点就是难以做性能优化。
react-motion 动画库
