const redis = require("redis");

class UserRepository{
    constructor(){
        this.client = redis.createClient();
    }
    add(user){
        return new Promise((resolve, reject) => {
            this.client.set(user.id, JSON.stringify(user),function(err) {
               if (err) {
                   reject(err)
               } else {
                   resolve()
               }
           })
       })
   }
}
module.exports = UserRepository