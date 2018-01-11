var conc = 'foo';

var obj = {
  get [conc]() { return 'bar'; }
};

console.log(obj); // "bar"
