console.log('以物件演算屬性名稱解構');
let key = 'z';
//物件演算屬性名稱指——母物件["子物件名稱"]——的表示方式
let {[key]: foo} = {a:'go',z: 'bar'};
console.log(foo); 

console.log('無效的JavaScript標識符作為屬性名稱');
({ 'fizz-buzz': fizzBuzz }={ 'fizz-buzz': true })

console.log(fizzBuzz); // "true"


