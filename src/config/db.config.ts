import mongoose from 'mongoose';

async function connect_db() {
    const mongo_uri = process.env.MONGO_URI;
    const db_name = process.env.DB_NAME;

    if (!mongo_uri) {
      throw new Error('MONGO_URI is not defined in environment variables.');
    }
    if(!db_name) {
        throw new Error('DB_NAME is not defined in environment variables');
    }

    await mongoose.connect(mongo_uri, { dbName: db_name });
    console.log('MongoDB Connected...');
}

export default connect_db;
