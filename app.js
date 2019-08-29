let test;

loadWasm('program.wasm')
.then(instance => {
    test = instance.exports.test;
    console.log(test(2, 3));
});
