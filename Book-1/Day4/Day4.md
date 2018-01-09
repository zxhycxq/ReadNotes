### 组件向外传递数据
问题、prop和state的缺点

### flux
mvc的缺陷
无法禁绝view和model之间的直接对话。

flux 更严格的数据流控制

**一个flux应用包含的四个部分**

dispatcher 处理动作分发，维持store之间的继承关系；
store 负责存储数据和处理数据相关的逻辑；
action 驱动dispatcher的js对象；
view 视图部分，负责显示用户界面

action 只是一个普通的js对象，代表一个动作的纯数据，类似于DOM中的event。

定义action通常需要两个文件：一个定义action的类型，一个定义action的构造函数（action creator）。

一个store也是一个对象，这个对象存储应用状态，同时还需接受dispatcher派发的松祚。根据动作来决定是否要更新应用状态

### 不足
store的依赖关系、难以进行服务器端渲染、store混杂了逻辑和状态


### 问题
flux的优缺点？
    更严格的数据流控制、单向数据流”的管理方式
redux 的改进？有什么不同？

代码
demo
