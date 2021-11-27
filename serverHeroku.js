//this file reads the word.json and deploys it on the heroku server
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000
server.use(middlewares)
server.use(router)
server.listen(port)
const FileSystem = require("fs");
const words = FileSystem.readFileSync("exercises.json")
