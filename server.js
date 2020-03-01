const express = require('express')
const path = require('path')
// Create the server
const app = express()

app.use(express.static(path.join(__dirname,'client/build')));

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/spotify', require('./routes/api/spotify'));