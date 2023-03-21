require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db_port = process.env.DB_PORT;

// Middlewares
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});