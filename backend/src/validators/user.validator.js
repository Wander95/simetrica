const { body,param } = require("express-validator");

module.exports = {
  postMiddleware(){
    return [
      body("email").isEmail(),
      body("password").isLength({ min: 3 }),
      body("firstName").not().isEmpty(),
      body("lastName").not().isEmpty(),
    ]
  },

  putMiddleware(){
    return [
      body("email").isEmail(),
      body("password").isLength({ min: 3 }),
      body("firstName").isEmpty(),
      body("lastName").isEmpty()
    ]
  }
}