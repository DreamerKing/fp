const Nothing = function(val){
    this.value = val;
}

Nothing.of = function(val){
    return new Nothing(val);
}

Nothing.map = function (f) {
    return this;
}

const Some = function (val) {
    this.value = val;
}

Some.of = function (val) {
    return new Some(val);
}

Some.map = function (fn) {
    return Some.of(fn(this.value));
}

export const Either = {
    Some,
    Nothing
}