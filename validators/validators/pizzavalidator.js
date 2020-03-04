const { check} = require('express-validator');

const PIZZAVALIDATOR=[
    check('name').isLength({ min: 1, max: 100 }),
];
module.exports={
    PIZZAVALIDATOR    
}