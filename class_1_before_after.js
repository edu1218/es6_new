console.log('建構函數寫法');
function Square1(width, height)
{
    var _width = width;     // private
    var _height = height;

    // defineProperty() 第2個參數，是屬性名稱(字串)
    // 第3個參數是屬性存取方法表， get 定義取值方法(getter), set 定義存值方法(setter)
    Object.defineProperty(this, "width", {
        get: function() {
            console.log("取 getter")
            return _width;
        },
        set: function(v) {
            console.log("存 setter", v);
            _width = v;
        }
    });

    Object.defineProperty(this, "area", {
        get: function() {
            console.log("取面積")
            return _width * _height;
        },
        set: function(v) { // DO NOTHING. 這段定義可省略不寫.
            console.log("this property is read only");
        }
    });
}
var sq1 = new Square1(10,20);
console.log(sq1.area);
sq1.width = 15;
console.log(sq1.area);
sq1.area = 100 

console.log('類別宣告寫法');
class Square2
{
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(v) {
        this._width = v;
    }

    get area() {
        return this._width * this._height;
    }
}

var sq2 = new Square2(10,20);
console.log(sq2.area);
sq2.width=15
console.log(sq2.area);


