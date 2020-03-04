const express = require('express');
const router = express.Router();
const axios = require('axios');

// 'api/spotify'

// GET https://api.spotify.com/v1/audio-analysis/{id}
router.get('/audio-analysis/:SONG_ID', async (req, res) => {
    axios.get(
        `https://api.spotify.com/v1/audio-analysis/${req.params.SONG_ID}`
    ).then(spotifyRes => {
        spotifyRes.
    })
})