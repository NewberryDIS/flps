// should really be using sequelize

const router = async app => {
    app.get('/', (request, response) => {
        
        const qcode = request.query.code 
        const qlang = request.query.lang 
        let lang = queryParser(qlang, 'lang'), code = queryParser(qcode, 'code')
        // if (qlang === '' || request.query.lang ==='All'){
        //     lang = 'lang_id LIKE %' 
        // } else if (qlang.indexOf(',') > -1) {
        //     qlang.split(",").map((l, i) => {
        //         lang += ' lang = "' + l + '"' + (i + 1 < qlang.split(",").length ? ' OR ' : ')')
        //     })
        // } else {
        //     lang = qlang
        // }
        const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
        const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
        const page = parseInt(request.query.p )
        console.log('code: '  + code + '; lang: ' + lang + '; dates: ' + dates[0] + ' - ' + dates[1] + "; search text: " + searchText + "; page: " + page + " ;")
        pool.query('SELECT  * FROM Items WHERE \
            ID IN (SELECT item_id FROM langlink WHERE lang_id IN (SELECT lang_id FROM langs WHERE ' + lang + ')\
                AND \
            ID IN (SELECT item_id FROM codelink WHERE code_id IN (SELECT code_id FROM codes WHERE ' + code + ')\
                AND Content LIKE ? AND DateYear BETWEEN ? AND ? LIMIT ?,100', [searchText, dates[0], dates[1], page], (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })
    app.get('/codecount/', (request, response) => {
        const lang = request.query.lang !== '' ? '%'  + request.query.lang  + '%' : '%Albanian%'
        const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
        const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
        pool.query('SELECT code_id from CodeLink WHERE item_id IN (SELECT ID FROM Items WHERE Languages IN (SELECT lang from Langs WHERE lang_id IN (?)) AND Content LIKE ? AND DateYear BETWEEN ? AND ? )', [lang, searchText, dates[0], dates[1]], (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })     
    app.get('/langcount/', (request, response) => {

        const lang = request.query.lang !== '' ? request.query.lang : '*'
        const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
        const searchText = request.query.s !== '' ? '' + request.query.s + '' : ''
        pool.query('select count(*) from CodeLink WHERE item_id IN (SELECT ID FROM Items WHERE Languages IN (SELECT lang from Langs WHERE lang_id IN (?)) AND Content LIKE ? AND DateYear BETWEEN ? AND ? )', [lang, searchText, dates[0], dates[1]], (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })        
}

const pool = require('../data/config');

module.exports = router;

function queryParser (q, t){
    let v = ''
    if (q === '' || q ==='All'){
        v = t + '_id LIKE "%")' 
    } else if (q.indexOf(',') > -1) {
        q.split(",").map((l, i) => {
            v += ' ' + t + ' = "' + l + '"' + (i + 1 < q.split(",").length ? ' OR ' : ')')
        })
    } else {
        v = ' ' + t + ' = "' + q + '")'
    }
    return v
}

// http://localhost:3002/codecount/?code=&lang=Albanian&dates=18501950&s=&p=0

// 'SELECT  * FROM Items WHERE \
//             // Codes LIKE ? \
//             //     AND \
//             ID IN (SELECT item_id FROM langlink WHERE lang_id IN (SELECT lang_id FROM langs WHERE ' + lang + ')\
//                 AND \
//             // Content LIKE ? \
//             //     AND \
//             DateYear BETWEEN ? AND ? \
//                 LIMIT ?,100'