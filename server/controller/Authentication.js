const {User} = require("../models/user")
const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
        try{
            const {username, password} = req.body

            let userMatch = await User.findOne ({where: {username: username}})

            if(userMatch){
                console.log("Username is already taken")
            }
            else{
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                let newUser = await User.create({username: username, hashedPass: hash})
                res.status(200).send(newUser)
            }

        }
        catch(err){
            console.log(err)

        }

    },

    login: async (req, res) => {
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username: username}})

            if(foundUser){
                const isAuth = bcrypt.compareSync(password, foundUser.hashedPass)
                
                if(isAuth){
                    res.status(200).send(foundUser)
                }else{
                    console.log("cant log in")
                }
            }else{
                console.log("cant log in")
            }
        }
        catch(err){
            console.error(err)

        }

    }

}