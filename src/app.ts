import express from 'express';
import config from 'config';
import connect from './utils/connect';

//config folder => default.ts => port => 1337 (value)
const port = config.get<number>('port')

const app = express()


app.listen(port, async ()=> {
    console.log('App is running');

    await connect();
});


