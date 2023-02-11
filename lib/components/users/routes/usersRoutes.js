import express from 'express'
import { users, userStore, findUsers, updateUsers, deleteUser } from "../controllers/usersController.js"
var router = express.Router()

router.get("/users", users)
router.post("/user/create", userStore)
router.get("/user/:id", findUsers)
router.patch("/user/update/:id", updateUsers)
router.delete("/user/delete/:id", deleteUser)

export { router }