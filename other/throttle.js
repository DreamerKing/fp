// 函数节流  基本思想：某些代码不可以在没间断的情况下连续重复执行。
// 只要代码周期性执行，都应该使用节流

var processor = {
    timer: null,
    // 实际执行的方法
    performProcessing() {
        console.log("throtte");
    },
    process() {
        clearTimeout(this.timer);
        var that = this;
        this.timer = setTimeout(function () {
            that.performProcessing();
        }, 1000);
    }
};