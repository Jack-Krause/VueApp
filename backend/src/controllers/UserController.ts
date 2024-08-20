const User = require('../models/User')
import { Request, Response } from 'express'

const userController = {

    createUser: async (req: Request, res: Response) => {
        try {
            const name: String = req.body.name
            const email: String = req.body.email

            console.info("request body received", req.body)

            console.info("name received", name)
            console.info("email received", email)
            
            const newUser = new User({ name: name, email: email })
            await newUser.save()

            console.info("user created", newUser)
            res.status(201).send(newUser)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error)
                res.status(500).send(error.message)
            }
        }
    },

}

module.exports = userController
