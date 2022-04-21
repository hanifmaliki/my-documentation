const array = require('./DistinctArray.json')
console.log(array);

const arrayDistinct = [];

array.forEach(e => {
    if (!arrayDistinct.includes(e)) {
        arrayDistinct.push(e)
    }
});

console.log(arrayDistinct)