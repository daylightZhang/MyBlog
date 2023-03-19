var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *   description: Use to request all users
 *  responses:
 *  '200':
 *   description: A successful response
 *  '400':
 *   description: Bad request
 *  '500':
 *   description: Internal server error
 * tags:
 * - home
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
