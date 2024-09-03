const express = require('express');
const axios = require('axios');
const router = express.Router();

// ambil api key dari file .env
const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// endpoint untuk mengambil data cuaca berdasarkan lokasi
router.get('/:location', async (req, res) => {
    const location = req.params.location;

    try {
        // Melakukan request ke API cuaca
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${location}`);
        res.json(response.data);
    } catch (error) {
        // Logging error detail untuk debugging
        console.error('Error Response:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error saat mengambil data cuaca', error: error.response ? error.response.data : error.message });
    }
});

module.exports = router;