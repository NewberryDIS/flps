// should really be using sequelize

const router = async app => {
    app.get('/db/', (request, response) => {
        
        const qcode = request.query.code 
        const qlang = request.query.lang 
        let lang = queryParser(qlang, 'lang'), code = queryParser(qcode, 'code')
        const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
        const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
        const page = parseInt(request.query.p )
        let qurry = 'ID IN (SELECT item_id FROM langlink WHERE lang_id IN (SELECT lang_id FROM langs WHERE ' + lang + ') AND \
        ID IN (SELECT item_id FROM codelink WHERE code_id IN (SELECT code_id FROM codes WHERE ' + code + ') AND \
        Content LIKE "' + searchText + '" AND DateYear BETWEEN ' + dates[0]  + ' AND ' + dates[1]
        console.log(qurry)
        pool.query('SELECT * FROM Items WHERE ' + qurry +  ' LIMIT ' + page + ',100; SELECT COUNT(*) FROM Items WHERE ' + qurry, (error, result) => {
        // pool.query('SELECT * FROM Items WHERE ' + qurry +  ', LIMIT ?,100; \
        //             SELECT COUNT(*) FROM Items WHERE ' + qurry, (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })

    app.get('/db/item', (request, response) => {
        const itemid = request.query.itemid 
        pool.query('SELECT * from Items WHERE id = ?', [itemid], (error, result) => {
            console.log("id = " + itemid)
            if (error) throw error;
            response.send(result);
        })
    })
    // app.get('/count', (request, response) => {
        
    //     const qcode = request.query.code 
    //     const qlang = request.query.lang 
    //     let lang = queryParser(qlang, 'lang'), code = queryParser(qcode, 'code')
    //     const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
    //     const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
    //     const page = parseInt(request.query.p )
    //     pool.query('SELECT COUNT(*) FROM Items WHERE \
    //         ID IN (SELECT item_id FROM langlink WHERE lang_id IN (SELECT lang_id FROM langs WHERE ' + lang + ')\
    //             AND \
    //         ID IN (SELECT item_id FROM codelink WHERE code_id IN (SELECT code_id FROM codes WHERE ' + code + ')\
    //             AND Content LIKE ? AND DateYear BETWEEN ? AND ?', [searchText, dates[0], dates[1], page], (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     })
    // })
    // app.get('/codecount', (request, response) => {
        
    //     const qcode = request.query.code 
    //     const qlang = request.query.lang 
    //     let lang = queryParser(qlang, 'lang'), code = queryParser(qcode, 'code')
    //     const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
    //     const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
    //     const page = parseInt(request.query.p )
    //     pool.query('SELECT code_id, count(*) from codelink WHERE item_id IN (SELECT id FROM Items WHERE \
    //         ID IN (SELECT item_id FROM langlink WHERE lang_id IN (SELECT lang_id FROM langs WHERE ' + lang + ')\
    //             AND \
    //         ID IN (SELECT item_id FROM codelink WHERE code_id IN (SELECT code_id FROM codes WHERE ' + code + ')\
    //             AND Content LIKE ? AND DateYear BETWEEN ? AND ?) GROUP BY code_id', [searchText, dates[0], dates[1], page], (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     })
    // })
    // app.get('/codecount/', (request, response) => {
    //     const lang = request.query.lang !== '' ? '%'  + request.query.lang  + '%' : '%Albanian%'
    //     const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
    //     const searchText = request.query.s !== '' ? '%' + request.query.s + '%' : '%'
    //     pool.query('SELECT code_id from CodeLink WHERE item_id IN (SELECT id FROM Items WHERE \
    //         ID IN (SELECT item_id FROM langlink WHERE lang_id IN (SELECT lang_id FROM langs WHERE ' + lang + ')\
    //             AND \
    //         ID IN (SELECT item_id FROM codelink WHERE code_id IN (SELECT code_id FROM codes WHERE ' + code + ')\
    //             AND Content LIKE ? AND DateYear BETWEEN ? AND ?)', [lang, searchText, dates[0], dates[1]], (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     })
    // })     
    // app.get('/langcount/', (request, response) => {

    //     const lang = request.query.lang !== '' ? request.query.lang : '*'
    //     const dates = request.query.dates !== '' ? [parseInt(request.query.dates.substr(0,4)), parseInt(request.query.dates.substr(5,8))] : [1850,1950]
    //     const searchText = request.query.s !== '' ? '' + request.query.s + '' : ''
    //     pool.query('select count(*) from CodeLink WHERE item_id IN (SELECT ID FROM Items WHERE Languages IN (SELECT lang from Langs WHERE lang_id IN (?)) AND Content LIKE ? AND DateYear BETWEEN ? AND ? )', [lang, searchText, dates[0], dates[1]], (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     })
    // })        
}

const pool = require('../data/config');

module.exports = router;

function queryParser (q, t){
    let v = ''
    if (!q || q ===''){
        v = t + ' LIKE "%")' 
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