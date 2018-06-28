 // 命令式方法遍历数组  告诉编译器如何做
 var  array=[1,2,3]
 for(var i=0;i<array.length;i++){
  console.log(`%c--array[i]-- `, 'color:blue;font-weight:bold', array[i])
 }

 // 声明式方法遍历数组    使用了一个处理“如何”做的抽象函数，只需关心做“什么”的问题
 var array2=[2,3,4]
 array2.forEach((ele)=> console.log(ele))
