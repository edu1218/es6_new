console.log('用現有的對象定義一個getter :defineProperty');
var o = {
    a: 0
};

//這裡的get是property descriptor
//     getA_plus_1是accessor
Object.defineProperty(o, 'getA_plus_1', {
    get: function () {
        return this.a + 1;
    }
});

console.log(o, o.getA_plus_1) // Runs the getter, which yields a + 1 (which is 1)
console.log('語法糖??????????????????????????');
var p = {
    b: 0,
    get getB_plus_1() {
        return this.b + 1
    },c:100
}
console.log(p, p.getB_plus_1);