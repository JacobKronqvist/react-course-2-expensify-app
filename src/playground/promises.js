const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve({
        //    name: 'Jacob',
        //    age: 27
        //})
        //resolve('This is my resolved data')
        //resolve('This is my other resolved data')
        reject('Something went wrong')
    }, 1500)
})

console.log('before')

promise.then((data) => {
    console.log('1', data)
}).catch((error) => {
    console.log('error ', error)
})
//promise.then((data) => {
//    console.log('2', data)
//})

console.log('after')