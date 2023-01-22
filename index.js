// Abdelaziz Omar
// 101292570

const fs = require("fs")
const csv = require("csv-parser")

try{
    if(fs.existsSync('canada.txt')){
        fs.unlinkSync('canada.txt');
        console.log('--- File \'Canada.txt\' deleted -successfully ---')
    }
}
catch(error) {
    console.error("--- File \'Canada.txt\' does not exist ---");
}

try{
    if(fs.existsSync('usa.txt')){
        fs.unlinkSync('usa.txt');
        console.log('--- File \'usa.txt\' deleted ---')
    }
}
catch(error) {
    console.error("--- File \'usa.txt\' does not exist ---");
}


var readStream = fs.createReadStream('input_countries.csv')

var writeStreamCA = fs.createWriteStream('Canada.txt')
var writeStreamUS = fs.createWriteStream('usa.txt')


readStream
    .pipe(csv())
    .on('data', (row) => {
    if (row.country === 'Canada') {
        writeStreamCA.write(Object.values(row).join(','))
        writeStreamCA.write('\n')
    }
    else if (row.country === 'United States') {
        writeStreamUS.write(Object.values(row).join(','))
        writeStreamUS.write('\n')
    }
});
