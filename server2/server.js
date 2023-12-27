// server.js
const express = require('express');
const sequelize = require('./src/config/database');
const router = require('./src/routes/api/api');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse JSON bodies

app.use('/api', router);

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('Error syncing with database:', error));
