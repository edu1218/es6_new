console.log('從做為函式參數的物件中提出某屬性的值');
let util=require('util')
var user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

console.log(`userId: ${userId(user)}`); // "userId: 42"

whois(user); // "jdoe is John"


function userId({
    id
}) { //{你想找的屬性}
    return id;
}

function whois({displayName,fullName: {firstName}}) {
    console.log(displayName + ' is ' + firstName);

}
console.log(util.inspect(user));