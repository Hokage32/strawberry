const {Games} = require('../models/games')

module.exports= {
    addToPlaylist: async (req, res) => {
        try {
            const {game_id, userId} = req.params
            await Games.create({game_id, userId})
            res.status(200).send('success')
        } catch (error) {
           res.sendStatus(400) 
        }
    },

    getUserGames: async (req, res) => {
        try {
            const {userId} = req.params
            const userGames = await Games.findAll({where: {userId: userId}})
            res.status(200).send(userGames)
        } catch (error) {
            res.sendStatus(400)
        }
    },

    deleteUserGame: async (req, res) => {
        try {
            const {game_id, userId} = req.params
            await Games.destroy({where: {game_id:game_id, userId: userId}})
            res.sendStatus(200)
            
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}
