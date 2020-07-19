const axios = require("axios");

class StackLog{
    init(config){
        this.secretKey = config.secretKey;
        this.bucketId = config.bucketId;
        this.apiURL = "http://192.168.43.244:8873/api/v1/sandbox/log/create/" + this.bucketId;
    }

    info(content){
        return new Promise(async  (resolve, reject)=>{
            try {
                let result = await axios.post(this.apiURL,
                    {
                        logTypeId: 1,
                        logMessage: content
                    },
                    {
                        headers:{
                            "authorization": `${this.secretKey}`,
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
                        logMessage: content
                    },
                    {
                        headers:{
                            "authorization": `${this.secretKey}`,
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
                        logMessage: content
                    },
                    {
                        headers:{
                            "authorization": `${this.secretKey}`,
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
                        logMessage: content
                    },
                    {
                        headers:{
                            "authorization": `${this.secretKey}`,
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
                        logMessage: content
                    },
                    {
                        headers:{
                            "authorization": `${this.secretKey}`,
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