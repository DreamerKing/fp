export const Monad = function(val){
    this.value = val
}

Monad.of = function(val){
    return new Monad(val);
}

Monad.prototype.isNothing = function() {
    return (this.value === null) || (this.value === undefined);
}

Monad.prototype.map = function(fn){
    return this.isNothing()? Monad.of(null): Monad.of(fn(this.value));
}

Monad.prototype.join = function(){
    return this.isNothing()? Monad.of(null): this.value;
}

Monad.prototype.chain = function(f){
    return this.map(f).join();
}