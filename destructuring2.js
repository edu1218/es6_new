
console.log('巢狀物件/陣列的解構');
var metadata = {
    title: 'Scratchpad',
    translations: [
       {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
       }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
//只要模仿資料的結構,然後再將想取得的那資料換成變數
var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

console.log('循環解構');
var peoples = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
];
  //1.只要模仿資料的結構,然後再將想取得的那資料換成變數
  for (var {name: n, family: {father: f}} of peoples) {
    console.log('Name: ' + n + ', Father: ' + f);
}

  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"
  
  