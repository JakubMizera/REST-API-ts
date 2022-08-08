import mongoose from "mongoose";
import config from 'config';
import logger from './logger'
import { exit } from "process";

async function connect() {
    const dbUri = config.get<string>('dbUri');
    
    try {
        await mongoose.connect(dbUri);
        //console.log('db connected');
        logger.info('db connected')
    } catch (error) {
        //console.error('Could not connect to db ' + error);
        logger.info('Could not connect to db. See the error: ' + error);
        process.exit(1);
    }
}

// function connect() {
//     const dbUri = config.get<string>("dbUri");

//     return mongoose
//     .connect(dbUri)
//     .then(()=>{
//         console.log('Connected to db');
//     })
//     .catch((error)=>{
//         console.log("Could not connect do db" + error);
//         process.exit(1);
//     })
// }

export default connect