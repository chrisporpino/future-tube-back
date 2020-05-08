import express from 'express'
import { getAllVideosEndpoint } from './endpoints/videos/getAllVideosEndpoint'
import { getVideoDetailsEndpoint } from './endpoints/videos/getVideoDetailsEndpoint'
import { loginEndpoint } from './endpoints/user/loginEndpoint'
import signupEndpoint from './endpoints/user/signupEndpoint'
import changePasswordEndpoint from './endpoints/user/changePasswordEndpoint'

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/login", loginEndpoint)
app.get("/videos", getAllVideosEndpoint)
app.post("/user/signup", signupEndpoint)
app.get("/video-details", getVideoDetailsEndpoint)
app.post("/user/change-password", changePasswordEndpoint)

export default app