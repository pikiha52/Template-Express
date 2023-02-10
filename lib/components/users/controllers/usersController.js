import response from "../../../utils/responses.js"
import { 
    successOk, createdData, badRequest, 
    internalServerError, messageSuccessOk, 
    messageNotFound, messageBadRequest, 
    messageCreatedData, messageInternalServError, notFound } from "../../../constants/constant.js"

import { queryAllUsers } from "../services/usersService.js"

const users = async (req, res) => {
    try {
        let data = await queryAllUsers()

        if (data.length < 1) {
            return response(res, notFound, false, messageNotFound, [])
        }

        return response(res, successOk, true, messageSuccessOk, data)
    } catch (error) {
        return response(res, internalServerError, false, messageInternalServError)
    }
}


export {
    users
}