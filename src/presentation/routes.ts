import express from 'express'
import { loginEndpoint } from './endpoints/users/loginEndpoint'
import { getAllVideosEndpoint } from './endpoints/videos/getAllVideosEndpoint'
import signupEndpoint from './endpoints/users/signupEndpoint'
import { getVideoDetailsEndpoint } from './endpoints/videos/getVideoDetailsEndpoint'

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/login", loginEndpoint)
app.get("/videos", getAllVideosEndpoint)
app.post("/user/signup", signupEndpoint)
app.get("/video-details", getVideoDetailsEndpoint)

export default app