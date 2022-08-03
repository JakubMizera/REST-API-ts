import mongoose from "mongoose";
import config from 'config';

async function connect() {
    const dbUri = config.get<string>('dbUri');
    console.log(dbUri)

    try {
        await mongoose.connect(dbUri);
        console.log('db connected');
    } catch (error) {
        console.error('Could not connect to db ' + error);
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