module.exports = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    if(req.method === 'OPTIONS') {
        return res.end(JSON.stringify({
            status: 'ok'
        }));
    }
       
    next();
}