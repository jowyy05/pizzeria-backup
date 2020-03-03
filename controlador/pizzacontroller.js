const PizzaService = require('../application/pizzaservice')

class PizzaController {
    static add( res) {
        var pizzaservice = new PizzaService();
        var response =  pizzaservice.add();
        res.end(JSON.stringify(response));
 }
}

module.exports = function (app){
app.post('/pizzas', PizzaController.add)
}