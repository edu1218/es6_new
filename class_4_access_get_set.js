let util = require('util')
class Option1NoSet {


    constructor(key, value, private_var, autoLoad = false) {
        //key, value, private_var, autoLoad = false
        //以上這幾個只是輸入參數,接下來看你要把那些做成屬性

        if (typeof key != 'undefined') {
            this[`_${key}`] = value;
        }
        this.autoLoad = autoLoad;

    }
    //下面這個想實現get2.js的作法改成動態,但是這裡的宣告的時間比建構子早,conc還沒被賦值,
    //所以無法動態=> 宣告失敗 
    get color() {
        if (this._color) {
            return this._color
        } else {
            return 'no color prop'
        }
    }



    // set color(value) {
    //   this._color = value
    // }
}
const op1 = new Option1NoSet('color', 'red')
console.log(op1.color);
//op1.color = 'yellow' //沒有set就寫入無效

console.log(util.inspect(op1));


class Option2NoGet {
    constructor(key, value, autoLoad = false) {
        if (typeof key != 'undefined') {
            this['_' + key] = value;
        }
        this.autoLoad = autoLoad;
    }

    // get color() {//使用語法:xxx.color 不用括號
    //   if (this._color !== undefined) {
    //     return this._color
    //   } else {
    //     return 'no color prop'
    //   }
    // }

    set color(value) { //使用語法: xxx.color=value 不用括號
        this._color = value
    }
}



const op2 = new Option2NoGet('color', 'blue')

console.log(op2.color) //沒有get就取得undefined