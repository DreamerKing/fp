# 函数式编程

## 引用透明性

## 函子

持有值的容器对象，并且实现map方法,在遍历值时生成新的对象。

MayBe函子避免频繁检查值是否为null或undefined。

Either函子主要用于分支处理，类似Optional。

pointed函子是指实现了of方法的函子，避免创建对象使用new操作符。

Monad实现了chain方法的函子，封装调map之后主动调join避免嵌套问题。
