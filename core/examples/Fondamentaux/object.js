const a = { b : 8 };

const c = (a) => {
    a.b = 9;
}

c({b:4});
console.log(a);
