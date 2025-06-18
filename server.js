const express = require('express');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const bucketName = 'maasser_1';
const fileName = 'data.json';

// Initialize Google Cloud Storage


let storage;
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
  storage = new Storage({ credentials });
} else {
  storage = new Storage();
}

// Helper to download data.json from GCS
async function getDataJson() {
  const file = storage.bucket(bucketName).file(fileName);
  const contents = await file.download();
  return JSON.parse(contents.toString());
}

// Helper to upload data.json to GCS
async function saveDataJson(data) {
  const file = storage.bucket(bucketName).file(fileName);
  await file.save(JSON.stringify(data, null, 2));
}

// Endpoint to fetch data
app.get('/data.json', async (req, res) => {
  try {
    const data = await getDataJson();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading data file');
  }
});

// Endpoint to save data
app.post('/data.json', async (req, res) => {
  try {
    await saveDataJson(req.body);
    res.status(200).send('Data successfully saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error writing to data file');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});