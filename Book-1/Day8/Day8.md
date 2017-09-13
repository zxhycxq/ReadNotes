### 高阶组件 HOC 

```
import React from ’ react ’ J
function removeUserProp(WrappedComponent) {
return class WrappingComponent extends React.Component {
render() {
const {user, ... otherProps} = this.props;
return <WrappedComponent {... otherProps) />
export default removeUserProp;
```

**意义：**
1、重用代码
2、修改现有react组件的行为


### 代理方式的高阶组件
返回的新组件类直接继承自 React.Component 类 。 新组件扮演的角色是传入参数组件的一个“代理”，在新组建的 render 函数中，把被包裹组件渲染出来，除了高阶组件自己要做的工作，其余
功能全都转手给了被包裹的组件。

**应用场景：**
操纵prop；
访问ref；
抽取状态；
包装组件。给组件添加样式 style

### 继承方式的高阶组件

代理方式和继承方式最大的区别，是使用被包裹组件的方式 。
 ```
 function removeUserProp(WrappedComponent) {
return class NewComponent extends WrappedComponent {
render() {
const {user, ... otherPropsl = this.props;
this .props = otherProps;
return super.render()//
 ```
 
 在代理方式下 WrappedComponent 经历了一个完整的生命周期，但在继承方式下 super.render 只是一个生命周期中的一个函数而已；在代理方式下产生的新组件
和参数组件是两个不同的组件，一次渲染，两个组件都要经历各自的生命周期，在继承方式下两者合二为一，只有一个生命周期 。

**应用场景：**
操纵prop；
操纵生命周期函数

> 优先考虑组合，然后才考虑继承。



