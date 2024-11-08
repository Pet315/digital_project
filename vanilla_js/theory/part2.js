class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
    static mergeComments(first, second) {
        return `comments: 1) ${first}, 2) ${second}`
    }
}

const com1 = new Comment('first comment') // new instance of class Comment, that is also new JS-object
com1.upvote() // method upvote() is on prototype level, because it is inherited by all instances of class Comment
// console.log(com1, com1.text);

// Browser: > com1. // you can find there all methods: 1) its own, 2) from parent class Comment, 
// 3) from default JS class Object, that has child - class Comment
// prototypes chain: com1 -> Comment -> Object

let com2
// console.log(com2, com2 instanceof Comment)

// console.log(Comment, Comment.prototype, Comment.prototype.constructor, Comment.prototype.upvote)
// Browser: > Comment; Comment.prototype; Comment.prototype.constructor; Comment.prototype.upvote

// console.log(com1.hasOwnProperty('text'), com1.hasOwnProperty('text1'));
// console.log(Comment.mergeComments('Good photo', 'How old are you?'));
// Browser: > console.dir(Comment); Comment.prototype // you can find mergeComments in constructor, not in instances list

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0) // acc = accumulator, 0 - initial value
    }
}

const myArr = new NumbersArray(2,5,7)
// console.log(myArr, ' sum:' + myArr.sum());
// prototypes chain: myArr -> NumbersArray -> Array -> Object

console.log(Comment === Comment.prototype.constructor, Comment.prototype === com1.__proto__)

let myStr = 'Ptr', myNum = 19
console.log(myStr.length, myStr.toUpperCase(), myNum+35, myNum.toString()+35); // variables with values of primitive types also are objects
// Browser: > arr = new String('apple')

// Browser: > fetch; fetch('https://jsonplaceholder.typicode.com/todos/1')

// fetch('https://jsonplaceholder.typicode.com/todos/55')
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(json => console.log(json))
//     // .catch(error => console.error(error))
//     .catch(error => console.log(error.message))

// const getData = (url) => 
//     new Promise((resolve, reject) => 
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))       
//             .catch(error => reject(error))
//     )

// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// const asyncFn1 = async () => {
//     return 'Success'
// }
// asyncFn1()
//     .then(value => console.log(value))

// const asyncFn2 = async () => {
//     throw new Error('Error 1')
// }
// asyncFn2()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))

// const timerPromise = () => // проміс стане виконаним через 2 сек
// // він створиться, ф-ція timerPromise його поверне, він буде в стані очікування і буде чекати поки не мине 2 сек
// // через 2 сек викликаємо ф-цію resolve без аргументів, але тим самим виконуємо проміс
//     new Promise((resolve, reject) => 
//         setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now() // результат виклику методу now об'єкту performance
//     await timerPromise() // очікуємо результату промісу, який будуть повернутий ф-цією timerPromise і тільки після цього йдемо далі
// // функція далі не виконується, поки не буде отримано результат промісу: або виконаний, або відхилений
//     const endTime = performance.now()
//     // console.log('Timer ended')
//     console.log('Timer ended', endTime, startTime, endTime - startTime) // різниця в мілісекундах
// }
// asyncFn()

const getData = async (url) => {
    const res = await fetch(url) // очікуємо виконання/відхилення промісу, повертаємого ф-цією fetch
    const json = await res.json()
    return json
}

// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

try {
    await getData('https://jsonplaceholder.typicode.com/todos') // не блокує виконання інших частин застосунку
    // наприклад при натисканні на якусь кнопку в інтерфейсі фронт-енд застосунку
} catch (error) {
    console.log(error.message);
}

let arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true
