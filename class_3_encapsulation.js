class Square2 {
    constructor(width, height) {
        this._width = width; //_xxx表示私有成員
        this._height = height;
    }
    //實現存取有效機制
    get width() { //get xxx()  即佔據  ?.xxx
        return this._width;
    }

    set width(v) {
        this._width = v;
    }

    get area() {
        return this._width * this._height;
    }
}

var sq2 = new Square2(10, 20);
console.log(sq2.area);
sq2.width = 15
console.log(sq2.area);