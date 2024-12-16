import express from 'express'
import dotenv from 'dotenv'
dotenv.config() // to acess values from the .env file

const app = express()
// Running our server from PORT (.ENV file) the clal back is the console log
app.listen(process.env.PORT, () => {
    console.log("Server is Running")

})