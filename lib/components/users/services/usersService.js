import { usersTable } from "../../../utils/prismaSchema.js"
import { findMany } from "../../../utils/centralRepository.js"

const queryAllUsers = async () => {
    let params = {
        select: {
            id: true
        }
    }
    
    return findMany(usersTable, params)
}

export {
    queryAllUsers
}