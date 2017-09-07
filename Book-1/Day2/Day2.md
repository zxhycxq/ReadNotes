
如果在构造函数中没有调用super(props),那么组件实例被构造之后，类实例的所有成员函数就无法通过this.props访问父组件传递来的props的值。

es6方法创造的react组件类并不自动给我们绑定this到当前实例对象。


####propTypes

这个组件支持哪些类型？

每个prop应该是什么样的格式？

isRequired

开发阶段用，产品环境不用

getInitialState

defaultPops

改变state，必须用this.setState 

其实直接用this.state也会改变组件内部的状态，但只是野蛮地改变了。并未驱动组件进行重新渲染。

###prop和state的对比
prop用于定义外部接口，state则记录内部状态。

prop的赋值在外部世界使用组件时，state的赋值在组件内部

组件不应该改变prop的值，state存在的目的就是让组件来改变的。


2017年9月7日20:46:42 今天有点发烧了，写得有点少。