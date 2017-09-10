###redux 
**三大原则**
唯一数据源、应用的数据状态应该只存储在唯一的一个store上。
这个唯一store上的状态，是一个树形的对象。每个组件只是树形对象上一部分的数据。      

 
保持状态只读、
不能直接修改状态，要修改store的状态，必须通过派发一个action对象完成。

数据改变只能通过纯函数完成、

`reducer(state,action)`
第一个参数是当前的状态，第二个参数是action接收到的action对象。
redux的reducer只负责计算状态，而不负责存储状态。

> 如果你愿意限制做事方式的灵活度，你几乎总会发现可以做得更好。

```jsx harmony
    const store=createStore(reducer,initialValues);
```
redux的store状态设计的一个主要原则：避免冗余的数据。

容器组件 聪明组件

展示组件 傻瓜组件 不需要有状态。只需要根据props来渲染结果。 

问题：什么是context，为什么会有context？写简单的代码
相当于提供了一个全局可以访问的对象。慎用。


