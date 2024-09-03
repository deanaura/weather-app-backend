const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./controllers/weatherController');
const cors = require('cors');

// dotenv -> untuk membaca file .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing json
app.use(express.json());

// cors
app.use(cors());

// route untuk weather api
app.use('/api/weather', weatherRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`);
});