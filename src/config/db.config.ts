import mongoose from 'mongoose';
import {get_env} from "@app/config/env.config";

async function connect_db() {
    const mongo_uri = get_env('MONGO_URI');
    const db_name = get_env('DB_NAME');

    await mongoose.connect(mongo_uri, { dbName: db_name });
    console.log('MongoDB Connected...');
}

export default connect_db;
