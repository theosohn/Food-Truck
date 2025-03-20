export function updateData(s) {
    const fs = require('fs');
    fs.appendFile('../data.txt', s, function (err) {
        if (err) throw err;
    });
}