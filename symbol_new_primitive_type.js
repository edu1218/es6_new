console.log(`從每個返回的符號值Symbol()是唯一的。
符號值可以被用作對象屬性的標識符; 這是他唯一目的。`);
let s = Symbol();

typeof s // "symbol"
console.log(`Symbol() === Symbol():${Symbol() === Symbol()} 根本無法區分`);
console.log(`所以可以帶字串參數: Symbol('s1')   Symbol('s2')\n\n`);


console.log('作为属性名的 Symbol');
let mySymbol = Symbol();
// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let b = {
    [mySymbol]: 'Hello!'
};

// 第三种写法
let c = {};

c[mySymbol] = 38;
Object.defineProperty(c, mySymbol, {value:'Hello!'});

// 以上写法都得到同样结果

console.log(a[mySymbol]); // "Hello!"
console.log(b[mySymbol]); // "Hello!"
console.log(c[mySymbol]); // "Hello!"