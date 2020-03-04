const express = require('express');
const router = express.Router();
const axios = require('axios');

// 'api/spotify'

// GET https://api.spotify.com/v1/audio-analysis/{id}
router.get('/audio-analysis/:SONG_ID', async (req, res) => {
    try {
        await axios.get(`https://api.spotify.com/v1/audio-analysis/${req.params.SONG_ID}`);
    } catch(err) {
        console.error(err)
    }
})