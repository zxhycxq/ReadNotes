> 函数的第一原则是要小，第二原则是要更小。

数学函数定义的关键是函数逻辑不应依赖于外部环境。

函数 是一段可以通过其名称被调用的代码，他可以传递参数并返回值。
方法 是一段必须通过其名称及其关联对象的名称被调用的代码。

引用透明性： 所有的函数对于相同的输入都将返回相同的值。
identify
```ecmascript 6
   // 命令式方法遍历数组  告诉编译器如何做
   var  array=[1,2,3]
   for(var i=0;i<array.length;i++){
    console.log(`%c--array[i]-- `, 'color:blue;font-weight:bold', array[i])
   }
  
   // 声明式方法遍历数组    使用了一个处理“如何”做的抽象函数，只需关心做“什么”的问题
   var array2=[2,3,4]
   array2.forEach((ele)=> console.log(ele))

```
