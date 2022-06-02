async function func1() {
    return '1'
}

async function func2() {
    return '2'
}

async function func3() {
    return '3'
}

const test = 1;

async function run() {
    // const [r1, r2, r3] = await Promise.all([
    const result = await Promise.all([
        func1(),
        test == 0 && func2(),
        func3(),
        ,
        ,
        ,
    ]);
    // const r1 = await func1();
    // const r2 = await func2();
    // const r3 = await func3();

    // console.log(r2);
    // console.log(r3);
    // console.log(r1);

    result.forEach(element => {
        if (element > 0) {
            console.log(element)
        }
    });
}

run();