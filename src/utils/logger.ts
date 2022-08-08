import pino from 'pino';
import dayjs from 'dayjs';

// logger to replace console.logs
//const pino = require('pino');

const log = pino({
    transport: {
        target: 'pino-pretty'
    },
    base:{
        pid: false
    },
    timestamp: ()=> `,"time":"${dayjs().format('DD/MM/YYYY HH:mm:ss')}"`
});

export default log;