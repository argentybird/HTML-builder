const fs = require('fs');
const path = require('path');
const route = path.join(__dirname, 'secret-folder');

fs.readdir(route, (err, data) => {
    if (err) throw err;

    for (let i = 0; i < data.length; i++) {
        fs.stat(path.join(route, data[i]), (err, stat) => {
            if (err) throw err;
            if (stat.isFile()) {

                let arr = data[i].split('.');
                let name = arr.slice(0, (arr.length - 1)).join('.') + '';
                let extname = path.extname(data[i]).split('.').join('');

                console.log(name, '-', extname, '-', (stat.size / 1024).toFixed(3) + 'kb');
            }
        })
    }
})