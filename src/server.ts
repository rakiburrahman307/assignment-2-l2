import app from './app';
import mongoose from 'mongoose';
import config from './config/config';

async function main() {
    try {
      // Connect to MongoDB
      await mongoose.connect(config.MONGODB_URL);
      console.log('Connected to MongoDB.');
  
      // Start the server
      app.listen(config.PORT, () => {
        console.log(`Server is running on port ${config.PORT}`);
      });
    } catch (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
  }
  
  main();