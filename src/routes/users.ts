// // import express, { NextFunction } from "express";

// var express = require('express');
// var router = express.Router();

// /**
//  * @swagger
//  * /api/puppies/{id}:
//  *   get:
//  *     tags:
//  *       - Puppies
//  *     description: Returns a single puppy
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: id
//  *         description: Puppy's id
//  *         in: path
//  *         required: true
//  *         type: integer
//  *     responses:
//  *       200:
//  *         description: A single puppy
//  *         schema:
//  *           $ref: '#/definitions/Puppy'
//  */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/puppies/{id}:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

export default router;
