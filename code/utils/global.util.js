
const fs = require('fs');
const join = require('path').join;
function listAllFiles(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(listAllFiles(file));
        } else { 
            results.push(file);
        }
    });
    return results;
}

module.exports={
    listAllFiles
}