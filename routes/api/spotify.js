const express = require('express');
const router = express.Router();
const Axios = require('axios');

// 'api/spotify'

// GET https://api.spotify.com/v1/audio-analysis/{id}
router.get('/audio-analysis/:SONG_ID', async (req, res) => {
    // TODO: AXIOS REQUEST TO SPOTIFY (create axios HOF)
})