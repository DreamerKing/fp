// 持值容器
export const Container = function(val){
    this.value = val;
}

// 提供静态方法of()隐藏构造函数的调用
Container.of = function(val) {
    return new Container(val)
}

Container.prototype.map = function(fn){
    return Container.of(fn(this.value));
}