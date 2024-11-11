import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';  // Import necesario para definir __dirname

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Definir __dirname manualmente en ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(cors({
  origin: ['https://harlys-blog.vercel.app', 'http://localhost:5173']
}));

const mongoUri = process.env.DATABASE_URL;
let db;

MongoClient.connect(mongoUri)
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('Blog');
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Ruta POST para guardar una entrada
app.post('/saveEntry', async (req, res) => {
  const { id, title, category, entry } = req.body;

  try {
    await db.collection('Entries').insertOne({ id, title, category, entry });
    res.send('Entry data inserted');
  } catch (err) {
    console.log('MongoDB Error', err);
    res.status(500).send('Error inserting data');
  }
});

// Ruta GET para obtener todas las entradas
app.get('/getEntries', async (req, res) => {
  try {
    const entries = await db.collection('Entries').find().toArray();
    res.json(entries);
  } catch (err) {
    console.log('MongoDB Error', err);
    res.status(500).send('Error Fetching Data');
  }
});

// Ruta GET para obtener una entrada por ID
app.get('/entry/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await db.collection('Entries').findOne({ id });
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json(entry);
  } catch (err) {
    console.error('Error fetching entry: ', err);
    res.status(500).json({ message: "Server error" });
  }
});

// Servir archivos estáticos desde la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

// Cualquier otra ruta servirá el archivo index.html de build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
