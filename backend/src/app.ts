import { Request, Response } from 'express'
import { Error } from 'mongoose'
const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./routes/UserRoutes')

const port = 3000

app.get('/', (req: Request, res: Response) => {
	res.send("hello world!")
})

app.use(cors())
app.use(bodyParser.json())

app.use("/user", userRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/vuefitness')
	.then(() => {
		console.info("MongoDB connected")
	})
	.catch((error: Error) => {
		console.error("error connecting to DB", error)
	})


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})