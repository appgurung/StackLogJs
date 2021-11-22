const stacklog = require("./index");

stacklog.init({
    secretKey:"sk_jli9t5rqlcd8qzvox4fffzd8luri66",
    bucketKey:"bk_dx8xonr4m1rnbqub4moj2ol7ldwmnt"
});

stacklog.info("Olumide is logging from node and info message").then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);
});

let a = [];
console.log(13 / 2);
