import mongoose from 'mongoose'
import { MONGO_URI } from "../configs";
import { DatabaseConnectionError } from '../utils/common/errors/database-connection-error'
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify:false,
          useCreateIndex: true,
        });
        console.info('Connected to MongoDb');
    } catch (err) {
        new DatabaseConnectionError()
        console.error(err);
    }
};

export default connectDB;