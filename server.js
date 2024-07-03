const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to my RESTful API!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is your data' });
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
