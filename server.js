import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001;

app.use(bodyParser.json())

app.use(cors({
  origin: 'https://harlys-blog.vercel.app'
}))

const mongoUri = process.env.DATABASE_URL;
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

app.get('/entry/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const entry = await db.collection('Entries').findOne({ id: id }); // Corrección

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json(entry);
  } catch (err) {
    console.error('Error fetching entry: ', err);
    res.status(500).json({ message: "Server error" });
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