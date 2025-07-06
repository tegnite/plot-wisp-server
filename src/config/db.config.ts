import mongoose from 'mongoose';

async function connect_db() {
  try {
    const mongo_uri = process.env.MONGO_URI;

    if (!mongo_uri) {
      throw new Error('MONGO_URI is not defined in environment variables.');
    }

    await mongoose.connect(mongo_uri, { dbName: 'plot-wisp' });
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

export default connect_db;
