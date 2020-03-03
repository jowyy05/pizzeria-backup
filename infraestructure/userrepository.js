const redis = require("redis");

class UserRepository {
    constructor() {
        this.client = redis.createClient();
        /*this.client
            .multi()
            .set()
            .hset()*/

    }
    add(user) {
        var client = this.client;
        return new Promise((resolve, reject) => {
            client.set(user.id, JSON.stringify(user), function (err) {
                if (err) {
                    reject(err)
                } else {
                    client.HSET('idx-email', user.email, user.id, function (err) {
                        if (err) {
                            reject(err)
                        } else {    
                            client.HGET('idx-email',user.email,function(err,data){
                                console.log(err);
                                console.log(data);
                            });                       
                            resolve()
                        }
                    })

                }

            })
        })
    }
}
module.exports = UserRepository