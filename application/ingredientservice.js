const Ingredient = require('../domain/Ingredients')
const IngredientsRepository = require('../infraestructure/IngredientsRepository')


class IngredientsService {
    async addRange(ingredients) {        
        var ingredientsDomain = ingredients.map(i=>Ingredient.create(i));                       
        var ingredientsRepository= await new IngredientsRepository();
     ingredientsRepository.addRange(ingredients);
    }
}
module.exports = IngredientsService

