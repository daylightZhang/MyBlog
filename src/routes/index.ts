// var express = require('express');
// var router = express.Router();

// /**
//  * @swagger
//  * /:
//  *  get:
//  *   description: Use to request all users
//  *  responses:
//  *  '200':
//  *   description: A successful response
//  *  '400':
//  *   description: Bad request
//  *  '500':
//  *   description: Internal server error
//  * tags:
//  * - home
//  */
// router.get('/', function(req: any, res: any, next: any) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

export default router;