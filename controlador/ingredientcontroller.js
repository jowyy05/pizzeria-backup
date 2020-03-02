const multer = require('multer')
const upload = multer()
const csv = require('csvtojson');
const Duplex = require('stream').Duplex;
const IngredientsService = require('../application/IngredientsService')

class IngredientController {

  static ingredient(req, res) {

    let stream = new Duplex();
    stream.push(req.files[0].buffer);
    stream.push(null);

    var ingredientsService = new IngredientsService();

    var ingredients = [];
    let result = csv({
      noheader: false,
      delimiter: ",",
      eol: "\n"
    }).fromStream(stream).subscribe(
      (json) => {
        ingredients.push(json);
      },
      () => { },
      () => {
        ingredientsService.addRange(ingredients);
        res.end()
      }
    )
  }
}
module.exports = function (app) {
  app.post('/ingredients', upload.any(),IngredientController.ingredient)
}