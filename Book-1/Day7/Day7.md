
### react 组件的性能优化

react perf 扩展

> 过早的优化是万恶之源

要达到更好的性能，有必要定义好组件的 shouldComponentUpdate 函数，让它在必要的时候返回 false ，告诉 React 不用继续更新，就会节省大量的计算资源 。 每
个React 组件的内在逻辑都有自己的特点，需要根据组件逻辑来定制 shouldComponentUpdate 函数的行为

问题：
react-redux与react默认的shouldComponentUpdate函数实现不同

Reconciliation 调和

首先检查两个树形的根节点的类型是否相同，根据相同或者不同有不同处理方式。
· 节点类型不同的情况 重新构建，componentWillUnmount

节点类型相同的情况

节点的类型可以分为两类：

一类是 DOM 元素类型,对应的就是 HTML 直接支持的元素类型;

        对于 DOM 元素类型， React 会保留节点对应的 DOM 元素，只对树形结构根节点上的属性和内容做一下比对，然后只更新修改的部分

另一类是 React 组件，也就是利用 React 库定制的类型

        根据新节点的 props 去更新原来根节点的组件实例,引发这个组件实例的更新过程

多个子组件的情况

key 属性的作用

虽然 key 是一个 prop ，但是接受 key 的组件并不能读取到 key 的值，因为 key 和 ref 是 React 保留的两个特殊 prop ，并没有预期让组件直接访问

###用 reselect 提高数据获取性能

reselect 库的工作原理：只要相关状态没有改变，那就直接使用上一次的缓存结果 。

范式化，就是遵照关系型数据库的设计原则，减少冗余数据 。

