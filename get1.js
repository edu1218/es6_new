console.log('在對像初始值設定項的新對像上定義一個getter');
let util=require('util')
var obj = {
    log: ['example','test'],
    get latest() {
      if (this.log.length == 0) return undefined;
      return this.log[this.log.length - 1];
    }
}
console.log(util.inspect(obj),`\nobj.latest:${obj.latest}\n'latest' in obj:${'latest' in obj}`);
delete obj.latest;
console.log(`after delete latest  'latest' in obj:${'latest' in obj}`)



