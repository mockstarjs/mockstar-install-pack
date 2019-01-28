function p1() {
    return Promise.resolve('ok1');
}

function p11() {
    return Promise.resolve('ok11');
}


function p2() {
    return Promise.reject('error2');
}


function p22() {
    return Promise.reject('error22');
}

Promise.all([p11(),p1()])
    .then((data) => {
        console.log(data);
    }).catch((err) => {
    console.error(err);
});