import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
const indexRouter = require('./routes/index')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const app: Express = express()
const port = process.env.PORT
const cors = require("cors")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}

var corsOptions = {
  origin: process.env.ATO_ALLOW_CORS_ORIGIN,
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
}))

app.use(bodyParser())
app.use(cookieParser())
app.use('/', indexRouter)

module.exports = app
