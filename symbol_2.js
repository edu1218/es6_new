console.log('在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。');
let s = Symbol();

let obj = {
    //[s]: function (arg) { console.log(arg); }
    [s](arg) {
        console.log(arg);
    }
};

obj[s](123);
console.log(`Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。`);
let log = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};

const shapeType = {
    triangle: Symbol(),
    square: Symbol(),
    circle:Symbol()
};

function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
        case shapeType.square:
            area = options.width * options.height;
            break;
        case shapeType.circle:
            area = Math.PI*Math.pow(options.width, 2) ;
            break;
    }
    return area;
}

getArea(shapeType.triangle, {
    width: 100,
    height: 100
});