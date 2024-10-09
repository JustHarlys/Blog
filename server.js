import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

const app = express()
const port = 3001;

app.use(bodyParser.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))

const mongoUri = 'mongodb+srv://Harlys:Harlys%401234@letitoutcluster.hqqmu.mongodb.net/LetItOut?retryWrites=true&w=majority';
let db;

MongoClient.connect(mongoUri)
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('Blog')
  })
  .catch(err => console.error('MongoDB connection error:', err))

app.get('/getEntries', async(req, res) => {
  try {
    const entries = await db.collection('Entries').find().toArray();
    res.json(entries)
  } catch (err) {
    console.log('MongoDB Error', err);
    res.status(500).send('Error Fetching Data')
  }
});

app.post('/saveEntry', async (req, res) => {
  const {id, title, category, entry} = req.body;

  try {
    await db.collection('Entries').insertOne({id, title, category, entry});
    res.send('Entry data inserted')
  } catch (err) {
    console.log('MongoDB Error', err);
    res.status(500).send('Error inserting data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})