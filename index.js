const axios = require("axios");

class StackLog{
    init(config){
        this.secretKey = config.secretKey;
        this.bucketId = config.bucketKey;
        this.channel = "Bg7hg8UP";
        this.apiURL = "http://www.stacklog.io:8873/api/v1/sandbox/log/create/" + this.bucketId;
        this.catchAllError = true;

        //register uncaught exception
        process.on('uncaughtException', (err)=>{

            if(this.catchAllError){
                this.fatal(err.stack).then((result)=>{
                    console.log(result);
                    process.exit(1);
                }).catch((error)=>{
                    console.log(error);
                });;

            }

        });
    }

    info(content){
        return new Promise(async  (resolve, reject)=>{
            try {
                let result = await axios.post(this.apiURL,
                    {
                        logTypeId: 1,
                        logMessage: content,
                        stackKey: this.channel
                    },
                    {
                        headers:{
                            "secretKey": `${this.secretKey}`,
                        }
                    }
                );

                resolve(result.data);

            }catch (e) {
                reject(e.message);
            }

        });
    }

    warning(content){
        return new Promise(async  (resolve, reject)=>{
            try {
                let result = await axios.post(this.apiURL,
                    {
                        logTypeId: 2,
                        logMessage: content,
                        stackKey: this.channel
                    },
                    {
                        headers:{
                            "secretKey": `${this.secretKey}`,
                        }
                    }
                );

                resolve(result.data);

            }catch (e) {
                reject(e.message);
            }

        });
    }

    debug(content){
        return new Promise(async  (resolve, reject)=>{
            try {
                let result = await axios.post(this.apiURL,
                    {
                        logTypeId: 3,
                        logMessage: content,
                        stackKey: this.channel
                    },
                    {
                        headers:{
                            "secretKey": `${this.secretKey}`,
                        }
                    }
                );

                resolve(result.data);

            }catch (e) {
                reject(e.message);
            }

        });
    }

    error(content){
        return new Promise(async  (resolve, reject)=>{
            try {
                let result = await axios.post(this.apiURL,
                    {
                        logTypeId: 4,
                        logMessage: content,
                        stackKey: this.channel
                    },
                    {
                        headers:{
                            "secretKey": `${this.secretKey}`,
                        }
                    }
                );

                resolve(result.data);

            }catch (e) {
                reject(e.message);
            }

        });
    }

    fatal(content){
        return new Promise(async  (resolve, reject)=>{
            try {
                let result = await axios.post(this.apiURL,
                    {
                        logTypeId: 5,
                        logMessage: content,
                        stackKey: this.channel
                    },
                    {
                        headers:{
                            "secretKey": `${this.secretKey}`,
                        }
                    }
                );

                resolve(result.data);

            }catch (e) {
                reject(e.message);
            }

        });
    }

}

module.exports = new StackLog();