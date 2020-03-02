const redis = require("redis");
const KEY = 'ingredients'
class IngredientsRepository{
    constructor(){
        this.client = redis.createClient();
    }
    addRange(ingredients){
        this.client.set(KEY, JSON.stringify(ingredients),function(){
            console.log(arguments);
        });
    }
    
}
module.exports = IngredientsRepository;