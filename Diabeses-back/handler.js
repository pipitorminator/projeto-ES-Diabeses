const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./router/Usuario');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);

app.disable('etag');

module.exports.routers = serverless(app);
