const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Change the port to 5000

// MySQL database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Routes

// Create
app.post('/names', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const sql = 'INSERT INTO names (name) VALUES (?)';
    db.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.status(201).json({ id: result.insertId, name });
    });
});

// Read
app.get('/names', (req, res) => {
    const sql = 'SELECT * FROM names';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.json(results);
    });
});

// Update
app.put('/names/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const sql = 'UPDATE names SET name = ? WHERE id = ?';
    db.query(sql, [name, id], (err) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.json({ id: parseInt(id), name });
    });
});

// Delete
app.delete('/names/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM names WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.json({ message: 'Deleted successfully', id: parseInt(id) });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
