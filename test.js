var fs = require('fs');
var CsvReadableStream = require('csv-reader');
 
var inputStream = fs.createReadStream('car1.csv', 'utf8');
var all_rows = [];
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        all_rows.push(row);
    })
    .on('end', function (data) {
        console.log('No more rows!');
        console.log(all_rows);
    });

 