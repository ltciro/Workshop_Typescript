'use strict'
import {setRouting} from './app.routing';
import express from 'express';
import bodyParser from 'body-parser';

const config = {
    port: 8000
};

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setRouting(app);

app.listen(config.port, function() {
     console.log(`Express server listening on port ${config.port}.`);
});
