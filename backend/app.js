const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const menuRoutes = require('./routes/menuRoutes');

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', menuRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
