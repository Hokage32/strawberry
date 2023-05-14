require('dotenv').config()
const express = require("express")
const cors = require('cors')
const {PORT} = process.env
const app = express()
const {sequelize} = require("./util/database")
const {User} = require("./models/user")
const {Games} = require("./models/games")
const {register} = require("./controller/Authentication")

app.use(express.json())
app.use(cors())

User.hasMany(Games)
Games.belongsTo(User)


app.post("/register", register)
app.post("/login")





sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log('Gotta Blast!'))
})