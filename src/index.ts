import connectDB from './loaders/mongoose';
import { app } from './loaders/express'
import {
    accessTokenSecret, MONGO_URI,
} from "./configs/index";


const start = async () => {
  
    if (!accessTokenSecret) {
        throw new Error('accessTokenSecret must be defined');
    }
    
    if (!MONGO_URI) {
        throw new Error('MONGO_URI must be defined');
    }


      try {
       
    // initialize database

    connectDB()

} catch (err) {
    console.error(err);
  }
    app.listen(3000, () => {
        console.log('Listening on port 3000!');
      });
};

start()
