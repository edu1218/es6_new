/*建構式是特別的物件方法，它必會在物件建立時被呼叫一次，
通常用於建構新物件中的屬性，以及呼叫上層父母類別(如果有繼承的話)之用。
用類別(class)的定義時，物件的屬性都只能在建構式中定義，這與用物件literal的定義方式不同，
這一點是要特別注意的。
如果物件在初始化時不需要任何語句，那麼就不要寫出這個建構式，
實際上類別自己有預設的建構式，它會自動幫你作建構的工作。
*/
//建構式是會被限制只能有一個，而在原本在物件中的方法也沒這個特性
//物件中定義同識別名稱的方法只會有一個定義被使用，這與傳入參數有或沒有，或是有幾個無關。
let util = require('util')
class Option {
  constructor({//建構子    跟建構函式名詞不要弄混
    key='defaultKey',
    value='defaultValue',
    autoLoad = false
  } = {}) {
    this.key = key
    this.value = value
    this.autoLoad = autoLoad
  }
}

const op1 = new Option({
  key: 'color',
  value: 'red'
})
const op2 = new Option({
 
  autoLoad : true
})
console.log(util.inspect(op1));
console.log(util.inspect(op2));