let util = require('util')

class Option1NoSet {


    constructor(key, value, private_var, autoLoad = false) {
        //key, value, private_var, autoLoad = false
        //以上這幾個只是輸入參數,接下來看你要把那些做成屬性

        if (typeof key != 'undefined') {
            
            this[`_${key}`] = value;
        }
        this.autoLoad = autoLoad;
        Object.defineProperty(this,key, {
            get: function() {
                
                return this[`_${key}`];
            }
        });

    }
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
        Object.defineProperty(this,key, {
            set: function(v) {
                
                this[`_${key}`] = v;
            }
        });
    }

}



const op2 = new Option2NoGet('color', 'blue')

console.log(op2.color) //沒有get就取得undefined