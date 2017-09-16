### 动画
网页中的实现方式：网页、CSS3.

**CSS3**
运行效率高，部分浏览器可利用CPU加速。

缺点：其动画过程需要描述成：在什么时间范围内，以什么样的运动节奏完成动画。
时间和速度曲线的不合理。

**脚本**

灵活度更强。

缺点：非浏览器原生支持，消耗资源多。处理不当会卡顿。

16毫秒  1s=1000ms 1000/60 ≈16
每16秒渲染一次画面。

setInterval和setTimeout并不能保证在指定时间间隔或者延迟的情况下准时调用指定函数。

```jsx harmony
    var lastT 工meStamp = new Date() . getTime ();
    function raf (fn) {
    var currTimeStamp = new Date() .getTime ();
    var delay = Math.max(O, 16 - {currTimeStamp - lastTimeStamp));
    var handle = setTimeout {function() {
    fn {currTimeStamp) ;
    ) , delay);
    lastTimeStamp = currTimeStamp;
    return handle;
    }
```

推荐使用 `requestAnimationFrame`

### ReactCSSTransitionGroup

###  React-Motion 动画库

刚度stiffness 阻尼damping
