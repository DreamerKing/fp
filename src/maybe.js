export const MayBe = function(val){
    this.value = val
}

MayBe.of = function(val){
    return new MayBe(val);
}

MayBe.prototype.isNothing = function() {
    return (this.value === null) || (this.value === undefined);
}

MayBe.prototype.map = function(fn){
    return this.isNothing()? MayBe.of(null): MayBe.of(fn(this.value));
}