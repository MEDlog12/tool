const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/download', (req, res) => {
    res.sendFile(__dirname + '/public/download.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});