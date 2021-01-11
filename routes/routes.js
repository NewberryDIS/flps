// should really be using sequelize

const router = async app => {
    app.get('/', (request, response) => {
        const code = request.query.code !== '' ? '%"' + request.query.code + '"%' : '%'
        const lang = request.query.lang !== '' ? '%'  + request.query.lang  + '%' : '%Albanian%'
        const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(4,8))] : [1850,1950]
        const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
        const index = parseInt(request.query.p )
        pool.query('SELECT  * FROM Items WHERE Codes LIKE ? AND Languages LIKE ? AND Content LIKE ? AND DateYear BETWEEN ? AND ? LIMIT ?,100', [code, lang, searchText, dates[0], dates[1], index], (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })
    app.get('/codecount/', (request, response) => {
        const lang = request.query.lang !== '' ? '%'  + request.query.lang  + '%' : '%Albanian%'
        const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(4,8))] : [1850,1950]
        const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
        pool.query('SELECT code_id from CodeLink WHERE item_id IN (SELECT ID FROM Items WHERE Languages LIKE ? AND Content LIKE ? AND DateYear BETWEEN ? AND ? )', [lang, searchText, dates[0], dates[1]], (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })     
    // app.get('/codelist/', (request, response) => {
    //     pool.query('SELECT * FROM Codes ORDER BY t1 ASC, t2 ASC, t3 ASC, t4 ASC, t5 ASC', (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     })
    // })        
}

const pool = require('../data/config');

module.exports = router;

// http://localhost:3002/codecount/?code=&lang=Albanian&dates=18501950&s=&p=0