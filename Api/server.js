const express = require('express');
require('dotenv').config();

const app = express();
const port = 4000;

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});