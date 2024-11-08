'use strict'

let objA = {
    a:10,
    b:true
}

let objB = 5
objB = objA
// console.log(objB)

objA.a = 20
objA.c = 'abc'
// console.log(objA)

delete objA.c
// console.log(objA)

objA.c = {
    isPop: true,
    country: "USA"
}
// delete objA.c.isPop
delete objA.c['isPop']
// console.log(objA)

const name = "Max"
objB = {
    name,
    greetings: function() {
        console.log('Hi there')
    }
}
// console.log(objB) // console.dir

// console.log(global.setImmediate) // globalThis

objB.greetings2 = function() {
    console.log('Hi there2'); 
}

// console.log(objB, objB.greetings2())

const post = {
    title: "My post",
    likesQty: 5,
    person: {
        name: "Ben",
        age: 19
    }
}

const postStr = JSON.stringify(post)
// console.log(postStr + 'hello', JSON.parse(postStr) + 'hello')

let post2
// post2 = Object.assign({}, post)
// post2 = {... post}
post2 = JSON.parse(JSON.stringify(post))
// post2.person = 'Nick'
post2.person.name = 'Anna'
// console.log(post, post2)

let c=0
const sum = function (a, b) {
    const c = a+b
    return c
}

// console.log(c)

// function sum(a, b) {
//     c = a+b
//     return c
// }

// console.log(sum(2,3))

// setTimeout(objB.greetings, 2000)

const NUM=15
function myFn() {
    function innerFn() {
        console.log(NUM)
    }
    innerFn()
}
// myFn()

// console.log(Boolean(''), !0, !!'abc')

objB = {
    ...objA, // refreshing objA to objB and deleting old objA!
    a: 22,
    ...post
}
// console.table(objB)

const x = 'x'
const y = 'y'
// console.log(`${x} ${y}`, 10 + 'abc', typeof (10 + 'abc'))

setTimeout(function() {
    // console.log('New item')
}, 1000)

setTimeout(() => {
    // console.log('New item2')
}, 1000)

myFn = (a,b) => {
    let c
    a += 1
    c = a+b
    console.log(c)
    return c
}

const reduction1 = a => {
    console.log(a)
    return a
}

const reduction2 = (a,b) => [a,b]
// const reduction2 = (a,b) => new Array(a,b)

// myFn(2,3)
// reduction1(2)
// console.log(reduction2(25,13).length)

const newPost = (post, addedAt = Date()) => ({
    ...post, 
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Max'
}
// console.log(newPost(firstPost))

const fnErr = () => {
    throw new Error('Error 1')
}
// fnErr()

try {
    // fnErr()
} catch (error) {
    console.error(error);
    console.log(error.message)
}

c=11
// reduction1(c+=1)

// Browser: > [41,28]
let arr = [41,28]
// arr.push(36)
// arr.unshift(true)
// console.log(arr)
// console.log(arr, arr.shift(), arr.pop(), arr)
// arr.forEach(el => console.log(el*2))
// arr.forEach((element, index) => console.log(el*2, indx))

arr = arr.map(el => el*3)
// console.log(arr);

const {id, author} = firstPost
// console.log(id, author)

const [numb1, numb2] = arr
// console.log(numb1, numb2)

myFn = ([numb1], {author}) => [numb1, author]
// myFn = ([], {}) => [numb1, author]
// console.log(myFn(arr, firstPost))

// if - else if - else
const month = 0
switch (month) {
    case 12:
        console.log('December')
    case 1:
        console.log('January')
    case 2:
        console.log('February')
        break
    default:
        // console.log('Not winter')
}

// month ? console.log('everything OK') : console.log('something wrong');
// for (let i=0; i<5; i++) { if (i%2==0) {console.log(i)} }

for (const key in firstPost) {
    // console.log(key);
}

// console.log(Object.keys(firstPost)); // also could be used for values

for (const index in arr) {
    console.log(arr[index]);
}

for (const letter of 'abc') { // also could be used for array, but NOT FOR OBJECTS!
    console.log(letter);
}
