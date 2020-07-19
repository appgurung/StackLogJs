const stacklog = require("./index");

stacklog.init({
    secretKey:"87C8BFFA-1BB9-40BC-9985-167162F800DC",
    bucketId:"7C329EF3-E657-402D-A52F-3533600980DB"
});

stacklog.info("Olumide is logging from node and info message").then((result)=>{
    console.log(result);
});