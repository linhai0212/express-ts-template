import {query, Request, Response} from "express"
import dotenv from 'dotenv';
dotenv.config();
var express = require('express')
var router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


module.exports = router;