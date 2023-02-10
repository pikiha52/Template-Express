import express from 'express'
import { users } from "../controllers/usersController.js"
var router = express.Router()

router.get("/users", users)

export { router }