const appName = process.env.APP_NAME
const appPort = process.env.PORT
const versionApp = process.env.VERSION

const createdData = 201
const successOk = 200
const notFound = 404
const badRequest = 400
const notAuthorized = 401
const internalServerError = 500

const messageCreatedData = "Success created data"
const messageSuccessOk = "Success" 
const messageNotFound = "Failed, not found"
const messageBadRequest = "Failed, bad request!, please check payload!"
const messageInternalServError = "Upps, some think whent wronk!"

export {
    appName, appPort, versionApp, internalServerError, 
    createdData, successOk, notFound, badRequest, notAuthorized, 
    messageCreatedData, messageSuccessOk, messageNotFound,
    messageBadRequest, messageInternalServError
}