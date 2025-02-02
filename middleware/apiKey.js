const utils = require('../utils/writer.js');

// In production, use environment variable
const API_KEY = process.env.API_KEY;

function verifyApiKey(req, res, next) {
    const apiKey = req.headers['authorization'];

    if (!apiKey) {
        utils.writeJson(res, { error: 'No API key provided' }, 401);
        return;
    }

    // Remove 'Bearer ' prefix if present
    const key = apiKey.startsWith('Bearer ') ? apiKey.slice(7) : apiKey;

    if (key === API_KEY) {
        next();
    } else {
        utils.writeJson(res, { error: 'Invalid API key' }, 401);
    }
}

module.exports = verifyApiKey; 