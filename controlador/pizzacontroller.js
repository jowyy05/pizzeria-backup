const PizzaService = require('../application/pizzaservice')

class PizzaController {
    static async add( res) {
        var pizzaservice = new PizzaService();
        var response =  await pizzaservice.add();
        res.end(JSON.stringify(response));
 }
}

module.exports = function (app){
app.post('/pizzas', PizzaController.add)
}