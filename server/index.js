require('dotenv').config()
const express = require("express")
const cors = require('cors')
const {PORT} = process.env
const app = express()
const {sequelize} = require("./util/database")
const {User} = require("./models/user")
const {Games} = require("./models/games")
const {register,login} = require("./controller/Authentication")
const {addToPlaylist, getUserGames, deleteUserGame} = require('./controller/Post')

app.use(express.json())
app.use(cors())

User.hasMany(Games)
Games.belongsTo(User)


app.post("/register", register)
app.post("/login",login)
app.post('/api/addToPlaylist/:game_id/:userId', addToPlaylist)
app.get('/api/getUserGames/:userId', getUserGames)
app.delete('/api/deleteUserGame/:game_id/:userId', deleteUserGame)





sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log('Gotta Blast!'))
})