console.log('類別宣告寫法',' no Hoisting');
let Polygon=class P {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
var p = new Polygon();
console.log(typeof Polygon, Polygon instanceof Function, Polygon.name);

