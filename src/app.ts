import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

//config folder => default.ts => port => 1337 (value)
const port = config.get<number>('port')

const app = express()


app.listen(port, async ()=> {
    //console.log('App is running');
    //replacing console.log
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app)    
});


