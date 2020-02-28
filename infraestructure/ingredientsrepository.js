const redis = require("redis");
const KEY = 'ingredients'
class IngredientsRepository{
    addRange(ingredient){
        this.client.set(KEY, JSON.stringify(ingredient),function(){
            console.log(arguments);
        });
    }
    
}
module.exports = IngredientsRepository;