const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./router/Usuario');
const medicoClinicaRouter = require('./router/MedicoClinica');
const avaliacaoRouter = require('./router/Avaliacao');
const prognosticoRouter = require('./router/Prognostico');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);
app.use(medicoClinicaRouter);
app.use(avaliacaoRouter);
app.use(prognosticoRouter);

app.disable('etag');

module.exports.routers = serverless(app);
