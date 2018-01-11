let util=require('util')
console.log('數組基本變數解構');
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50]//使用...之前的statement必須有分號
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
console.log('變數交換');
var c = 1;
var d = 3;
[c, d] = [d, c];
console.log(c); // 3
console.log(d); // 1
console.log('解析自函式回傳的陣列');

function haha() {
    return [1, 2];
}

let e, f;
[e, f] = haha();
console.log(e); // 1
console.log(f); // 2
console.log('忽略某些回傳值');

function hehe() {
    return [1, 2, 3];
}

var [g, , i] = hehe();
console.log(g); // 1
console.log(i); // 3
console.log('從正則運算式的比對結果取值');
var url = 'https://developer.mozilla.org/en-US/Web/JavaScript';

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(util.inspect(parsedURL)); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"

console.log('物件基本變數解構');
//物件解構方式:1.({}={}) 2.let o={};{}=o;
({a,b,...rest} = {a: 10,b: 20,c: 30,d: 40})
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c: 30, d: 40}

console.log('基本指派');
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); 
console.log(q); 
console.log('指派到新的變數');
var o = {p: 42, q: true};
var {q: foo, p: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true
console.log('設定函式的預設值');
function drawES6Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, cords, radius);
    // 這樣就畫了東西
  }
  
  drawES6Chart({
    cords: {x: 18, y: 30},
    radius: 30
  });