console.log(`繼承的子類別中的建構式，super()需要放在建構式第一行
，這是標準的呼叫方式。如果有需要傳入參數可以傳入。`);
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color
    }
    toString() {
        return super.toString() + ' in ' + this.color
    }
}
let c = new ColorPoint(1, 2, 'red');
console.log(c.toString());
console.log(`繼承的子類別中的屬性與方法，都會覆蓋掉原有的在父母類別中的同名稱屬性或方法，
但可以用super關鍵字來存取父母類別中的屬性或方法`);