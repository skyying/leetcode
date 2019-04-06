// create a iterator in js
function* listGenerator(nestedList) {
  for (let el of nestedList) {
    if (el.isInteger()) {
      yield el.getInteger();
    } else {
      yield* listGenerator(el.getList());
    }
  }
}

// js will return a {value: "xxx", done: false} object when call .next()
var NestedIterator = function(nestedList) {
  this._gen = listGenerator(nestedList);
  this._val = this._gen.next();
};

NestedIterator.prototype.hasNext = function() {
  return !this._val.done;
};

NestedIterator.prototype.next = function() {
  // the value here is return from iterator in js
  var value = this._val.value;
  this._val = this._gen.next();
  return value;
};