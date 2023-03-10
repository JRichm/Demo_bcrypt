// dependancies
const express = require('express');
const cors = require('cors');

// controller functions
const { createMessage } = require('./controller');

// midleware
const app = express();
const port = 4050;

// app setup
app.use(express());
app.use(express.json());
app.use(cors());


// endpoints
app.post('/api/messages', createMessage);

// run server
app.listen(port, () => console.log(`server is up on ${port}`));