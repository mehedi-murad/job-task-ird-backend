const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const db = new sqlite3.Database('./dua_main.sqlite', (err) => {
    if (err) {
      console.error('Database connection error:', err.message);
    } else {
      console.log('Connected to the SQLite database');
    }
  });

app.get('/', (req, res) => {
    res.send('Welcome to the API'); // You can customize this message
  });
  
  app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM category', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });


  app.get('/api/subCategory', (req, res) => {
    // Replace 'your_table' with the actual table name (dua_main in this case)
    db.all('SELECT * FROM sub_category', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });

  app.get('/api/dua', (req, res) => {
    // Replace 'your_table' with the actual table name (dua_main in this case)
    db.all('SELECT * FROM dua', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });
  
  // Additional routes can be added as needed
  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
