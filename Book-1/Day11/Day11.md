### 单页面应用

目标：

不同页面之间切换不会造成页面的刷新；页面内容和URL保持一致。
### React Router 

Router：在整个应用中只需要一个实例，代表整个路由器；

Route：代表一个路径对应页面的路由规则，一个应用中应该会有多个Route实例。

React Router库认为每个页面就是一个react组件。
`*``通配符代表所有路径。路径为 * 通配符的route实例必须放在最后。因为其按照route在代码中的顺序决定匹配顺序。

Router 实例的 history 属性值被赋为 browserHistory ，以和浏览器url产生关联。

Link组件支持路由链接，作用是产生HTML的链接元素。

建立Route组件之间的关系，就是路由的嵌套。嵌套路由的一个好处：每一层Route只决定到这一层的路径。而非整个路径。

indexRoute 默认链接

###与redux结合
Router 可以是 Provider 的子组件，但是，不能够让 Provider 成为 Router 的子组件，因
为 Router 的子组件只能是 Route 或者 IndexRoute。 

react-router-redux库



TODO
HTML5 history API
