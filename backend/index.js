const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const uri = "mongodb+srv://team-home-app:<password>@cluster0.rrtykdn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const userDataSchema = new mongoose.Schema({
    fullName: String,
    streetAddress: String,
    postalCode: { type: mongoose.Schema.Types.Mixed },
    country: String,
    phoneNumber: { type: mongoose.Schema.Types.Mixed },
    email: String,
    password: String,
    salaryIndication: String,
    passwordConfirmation: String,
});

const UserData = mongoose.model('UserData', userDataSchema);

async function run() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      app.get('/api/userdata', async (req, res) => {
        try {
          const userData = await UserData.find();
          res.json(userData);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
  
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } finally {
      await client.close();
    }
  }
  
  run().catch(console.dir);