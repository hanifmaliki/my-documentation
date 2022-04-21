const test = {
    satu: 1,
    dua: 'dua',
    tiga: true
};

const testArray = Object.keys(test);
console.log('testArray', testArray);

testArray.forEach((a, b) => {
    console.log('Inside forEach', a, b)
});

for (let prop in test) {
    console.log('Inside for', prop, test[prop])
};