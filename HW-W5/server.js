const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin1',
  database: 'home'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/rooms', (req, res) => {
  const sql = 'SELECT * FROM room';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
