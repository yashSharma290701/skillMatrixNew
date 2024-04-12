const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', Router);

const mongoURI = 'mongodb+srv://yashsharmaharsh:yash1234@cluster1.fdeoqyu.mongodb.net/authorisation';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(5001, () => {
    console.log("app is listening ");
});
