import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

//config folder => default.ts => port => 1337 (value)
const port = config.get<number>('port');
// toString(number system) if toString(2) => binary, toString(10) => decimal
logger.info(`Port: ${port.toString(10)}`);


const app = express();

app.use(express.json());


app.listen(port, async ()=> {
    //console.log('App is running');
    //replacing console.log
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
});




