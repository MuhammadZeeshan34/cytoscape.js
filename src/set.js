function ObjectSet(){
  this._obj = {};
}

let p = ObjectSet.prototype;

p.add = function( val ){
  this._obj[ val ] = 1;
};

p.remove = function( val ){
  this._obj[ val ] = 0;
};

p.has = function( val ){
  return this._obj[ val ] === 1;
};

p.forEach = function( callback, thisArg ){
  return Object.keys( this._obj ).forEach( callback, thisArg );
};

module.exports = typeof Set !== 'undefined' ? Set : ObjectSet;