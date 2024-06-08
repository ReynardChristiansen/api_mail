require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const emailRoutes = require('./routes/Mail')
const cors = require('cors')

const app = express()


app.use(cors());
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/emails', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





