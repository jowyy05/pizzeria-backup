const Pizza = require ('../domain/pizza')
const PizzaRepository = require ('../infraestructure/pizzarepository')

class PizzaService{
    add(dto){
        var pizza = Pizza.create(dto);
        var pizzaRepository = new PizzaRepository();
        pizzaRepository.add(pizza)
        return{
            name : pizza.name
            //image
        }
    }
}

module.exports = PizzaService