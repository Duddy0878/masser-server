const express = require('express');

const fs = require('fs');
const app = express();

a
app.use(express.json());
app.use(express.static('public')); 
const path = require('path');
const DATA_FILE = path.join(__dirname, 'data.json'); // Use absolute path



// Endpoint to fetch data
app.get('/data.json', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading data file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint to save data
app.post('/data.json', (req, res) => {
    const newData = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to data file');
        } else {
            res.status(200).send('Data successfully saved');
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
