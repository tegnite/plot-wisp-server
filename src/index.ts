import express from 'express';
import connect_db from '@app/config/db.config';

const app = express();
const port = 8000;

// Connect to database
connect_db();

app.get('/', (req, res) => {
  res.send('Hello World! From Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
