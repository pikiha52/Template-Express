import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from "morgan"

import { appName, appPort, versionApp, notFound, messageNotFound } from "./lib/constants/constant.js"
import response from './lib/utils/responses.js'

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(logger('dev'));

app.use(function (req, res, next) {
    return response(res, notFound, false, messageNotFound)
});


let baseUrl = `/api/${versionApp}/${appName}`

app.listen(appPort, () => {
    console.log(`${appName} started on port`, appPort);
})
