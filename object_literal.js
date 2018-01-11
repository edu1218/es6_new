let util = require('util')
//ES6 的 Object 定義變得清楚而且簡短，通過提供縮寫語法：function 定義和初始化參數。
//也提供 property keys 的初始值運算(computed property keys)
let car = getCar('Kia', 'Sorento', 40000);
console.log(util.inspect(car));
function getCar(make, model, value) {
    return {
      
     make, // same as make: make
     model, 
     value, 
     // computed values now work with
     // object literals
     ['make' + make]: true,
     // Method definition shorthand syntax
     // omits `function` keyword & colon
     depreciate() {
       this.value -= 2500
     }
    }
}



   