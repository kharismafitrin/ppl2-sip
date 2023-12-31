// Import your seeders
import { seedUsers } from './userSeeder.js';
import { seedPartaiInfos } from './partaiInfoSeeder.js';
import { seedPaslon } from './paslonSeeder.js';
import { seedForums } from './forumSeeder.js';
import { seedPilpres2019s } from './pilpres2019Seeder.js';
import { seedDPR2019s } from './suaraDPR2019Seeder.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/sip_db',mongoOptions)

// Define a function to run all seeders
async function runAllSeeders() {
  try {
    // Run the user seeder
    await seedUsers();

    // Run the partaiInfo seeder
    await seedPartaiInfos();

    await seedPaslon();
    await seedDPR2019s();
    await seedPilpres2019s();


    await seedForums();



    console.log('All seeders executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    // Close database connections or perform any necessary cleanup
    // if applicable to your project
    mongoose.disconnect();

  }
}

// Call the function to run all seeders
runAllSeeders();
