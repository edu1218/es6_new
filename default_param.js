//當傳入 function 的參數沒有給值時,能有預設值
function link(height = 50, color = 'red', url = 'http://azat.co') {
    console.log(height,color,url);

}
link(100)
link('green')//沒有依據類型賦值


console.log('改變參數');
function link2({ height = 50, color = 'red', url = 'http://azat.co' } = {}) { 
    console.log(height,color,url);
}
link2()
link2({color:'green'})


