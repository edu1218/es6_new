var wait1000 = () => new Promise((resolve, reject) => {
    console.log('in constructing waiting 1s');
    setTimeout(resolve, 1000)
})
wait1000()//1>
    .then(function() {
        console.log('Yay!')
        return wait1000()
    })
    .then(function() {
        console.log('Wheeyee!')
    });