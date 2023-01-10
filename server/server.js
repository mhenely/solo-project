const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});