// 命令式方法遍历数组  告诉编译器如何做
var array = [1, 2, 3]
for (var i = 0; i < array.length; i++) {
  console.log (`%c--array[i]-- `, 'color:blue;font-weight:bold', array[i])
}

// 声明式方法遍历数组    使用了一个处理“如何”做的抽象函数，只需关心做“什么”的问题
var array2 = [2, 3, 4]
array2.forEach ((ele) => console.log (ele))

const forEach = function (arr, fn) {
  for (let i = 0; arr.length; i++) {
    fn (arr[i])
  }
}

const forEachObject = (obj, fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty (property)) {
      fn (property, obj[property])
    }
  }
}

var objdemo = {name: 1, maximumAge: 11};
forEachObject (objdemo, (m, n) => {
  console.log (m + ':' + n)
})

const unless = (predicate, fn) => {
  if (!predicate) {
    fn ()
  }
}

const times = (tiimes, fn) => {
  for (var i = 0; i < times; i++) {
    fn (i)
  }
}

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

const sortBy = (property) => {
  return (a, b) => {
    var result = (
      a[property] < b[property] ? -1 : (
        a[property] > b[property]
      ) ? 1 : 0
    )
  }
}
