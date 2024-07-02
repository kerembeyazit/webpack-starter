const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all GET requests by serving the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Set the port to the value provided by Heroku, or 3000 for local development
const PORT = process.env.PORT || 3000;
const host = '0.0.0.0';

// Start the server
app.listen(PORT, host, () => {
    console.log(`Server is running on port ${PORT}`);
});
