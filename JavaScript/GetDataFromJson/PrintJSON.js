const data = require('./File1.json');
const sub = data.data.entity.data;

sub.forEach(element => {
    console.log(`('` + element.companyAlias + `', '` + element.companyName + `'),`);
});