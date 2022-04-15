
const obj1 = require('./data1.json')
const obj2 = require('./data2.json')
const a = Object.keys(obj1);
const b = Object.keys(obj2);
// console.log(a,b);

const getNew = (newObj, oldObj) => {

    let total = { keyFound: {}, notFound: {}, allMatched: {} };



    for (const key in oldObj) {
        if (newObj.hasOwnProperty(key)) {
            if (oldObj[key] == newObj[key]) {
                total.allMatched[key] = newObj[key];
                console.log("hello", key)
            } else {
                total.keyFound[key] = oldObj[key]
            }
        } else {
            total.notFound ={...total.notFound, [key]:oldObj[key]};
        }
    }


    for (const key in newObj) {
        if (oldObj.hasOwnProperty(key)) {
            if (newObj[key] == oldObj[key]) {
                total.allMatched[key] = oldObj[key];
                console.log("hello", key)
            } else {
                total.keyFound[key] = newObj[key]
            }
        } else {
            total.notFound ={...total.notFound, [key]:newObj[key]};
        }
    }
    // for (const key in newObj) {
    //     if (newObj[key] != oldObj[key]) {
    //         total.notFound[key] = newObj[key];
    //     }
    // }

    if (Object.keys(total).length > 0) {
        return JSON.stringify(total);
    }


}
console.log(getNew(obj1, obj2));

console.log("**********************************");

