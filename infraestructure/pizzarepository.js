const redis = require("redis");



class PizzaRepository {
 constructor(){
this.client =redis.createClient();
 }
add(pizza){
    this.client.set(pizza.id, JSON.stringify(pizza),function(){
        console.log(arguments);
    });
}

}

module.exports = PizzaRepository