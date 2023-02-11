import { v4 as uuidv4 } from 'uuid'
import { usersTable } from "../../../utils/prismaSchema.js"
import { findMany, insertOne, findUnique, updateOne, deleteOne } from "../../../utils/centralRepository.js"

const queryAllUsers = async () => {
    let params = {
        select: {
            id: true
        }
    }

    return findMany(usersTable, params)
}

const insertUsers = async (payload) => {
    let params = {
        id: uuidv4(),
        name: payload.name,
        email: payload.email,
        phone_number: payload.phone_number,
        role_id: payload.role_id
    };

    const data = await insertOne(usersTable, params);
    return data
}

const queryById = async (req) => {
    let id = req.params.id
    let params = {
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
        }
    }

    const data = await findUnique(usersTable, params);
    return data
}

const updateUsersService = async (req) => {
    let status = true
    let formBody = req.body
    let name = formBody.hasOwnProperty('name') ? formBody.name : null
    let email = formBody.hasOwnProperty('email') ? formBody.email : null
    let phone_number = formBody.hasOwnProperty('phone_number') ? formBody.phone_number : null
    let role_id = formBody.hasOwnProperty('role_id') ? formBody.role_id : null

    if ((name == null) || (email == null) || (phone_number == null) || (role_id == null)) {
        return status = false
    }

    let params = {
        id: req.params.id,
        updateData: {
            name: name,
            email: email,
            phone_number: phone_number,
            role_id: role_id
        }
    }

    const data  = await updateOne(usersTable, params)
    return data
}

const deleteOneUsers = async (req) => {
    let params = {
        id: req.params.id
    }
    
    let data = await deleteOne(usersTable ,params)
    return data
}

export {
    queryAllUsers, insertUsers, updateUsersService, queryById, deleteOneUsers
}