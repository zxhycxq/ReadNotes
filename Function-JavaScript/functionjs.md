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

纯函数代码

1、可测试
2、并发
3、可缓存

###高阶函数
概念： 接受函数作为参数并且返回函数作为输出的函数。

```ecmascript 6
   const forEach=function (arr,fn) {
     for(let i=0;arr.length;i++){
       fn(arr[i])
     }
   }
```

```ecmascript 6
  const forEachObject = (obj, fn) => {
    for (var property in obj) {
      if (obj.hasOwnProperty (property)) {
        fn (property, obj[property])
      }
    }
  }
  
  var objdemo={name:1,maximumAge:11};
  forEachObject(objdemo,(m,n)=>{console.log(m +':'+n)})

```

```ecmascript 6
const unless = (predicate, fn) => {
  if (!predicate) {
    fn ()
  }
}
```

```ecmascript 6
const times = (tiimes, fn) => {
  for (var i = 0; i < times; i++) {
    fn (i)
  }
}
```

```ecmascript 6

const every = (arr, fn) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    // for(const value of arr)   fn(value)
    result = result && fn (arr[i])
  }
  return result
}

const some = (arr, fn) => {
  let result = false;
  for (var value in arr)
    result = result || fn (value)
  return result
}

some ([1, 2, 3, NaN], isNaN)

```

```ecmascript 6
const sortBy = (property) => {
  return (a, b) => {
    var result = (
      a[property] < b[property] ? -1 : (
        a[property] > b[property]
      ) ? 1 : 0
    )
  }
}
```

```ecmascript 6
  
const tap = (value) =>
  (fn) => (
    typeof ( fn ) === 'function' && fn (value),
      console.log (value)
  )

['1', '2','3'].map(parseInt)
//  [1, NaN, NaN]

// 接受一个给定多参数函数，并把他转换为一个只能接受一个参数的函数
const unary = (fn) =>
  fn.length === 1
    ? fn
    : (arg) => fn (arg)
 ['1', '2','3'].map(unary(parseInt))
// [1, 2, 3]

const once=(fn)=>{
  let done=false;
  return function () {
    return done ?undefined:((done = true),fn.apply(this,arguments))
  }
}

const memorized=(fn)=>{
  const lookupTable={}
  return (arg)=>lookupTable[arg]||(lookupTable[arg]=fn(arg))
}

let fastFactorial =memorized((n)=>{
  if(n ===0){
    return 1;
  }
  
  return n*fastFactorial(n-1)
})
//------------------
// map 是一个投影函数
const map=(array,fn)=>{
  let results=[]
  for(const value of array){
    results.push(fn(value))
  }
  return results;
}
map([1,5,6],(x)=>x*x)

const filter=(array,fn)=>{
  let results=[]
  for (const value of array) {
    (fn(value))?results.push(value):undefined
  }
  return results
}

const concatAll=(array,fn)=>{
  let results=[]
  for(const value of array){
    results.push.apply(results,value);
  }
  return results
}

const reduce=(array,fn, initialValue)=>{
  let accumlator;
  
  if(initialValue!=undefined){
    accumlator=initialValue
  }else{
    accumlator=array[0]
  }
  
  if(initialValue===undefined){
    for(let i=1;i<array.length;i++){
      accumlator=fn(accumlator,array[i])
    }
  }else{
    for(const value of array){
      accumlator=fn(accumlator,value)
    }
  }
  
  return [accumlator]
}

const zip=(leftArr,rightArr,fn)=>{
  let index,results=[];
  for(index = 0;index<Math.min(leftArr.length,rightArr.length);index++){
    results.push(fn(leftArr[index],rightArr[index]))
  }
  return results;
}

zip([1,2,3],[22,33,5],(x,y)=>x+y)

const curr=(fn)=>{
  if(typeof fn !=='function'){
    throw Error('未提供函数')
  }
  return function curriedFn(...args) {
    if(args.length<fn.length){
      return function () {
        return curriedFn.apply(null,args.concat(
          [].slice.call(arguments)
        ))
      }
    }
    return fn.apply(null,args)
  }
}

//偏函数
const partial=function (fn,...partialArgs) {
  let args=partialArgs;
  return function (...fullArguments) {
    let arg=0;
    for(let i=0;i<args.length&&arg<fullArguments.length;i++){
      if(args[i]===undefined){
        args[i]=fullArguments[arg++]
      }
    }
    return fn.apply(null,args)
  }
}

```
unix

>每个程序只做好一件事情，为了完成一项新的任务，重新构建要好于在复杂的旧程序中添加新“属性”。

> 每个程序的输出应该是另一个尚未可知的程序的输入。
