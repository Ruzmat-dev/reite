const fs = require('fs');

function baa(data , error) {

    let s = error.toString()

    console.log(s);
    console.log(data);
}

fs.readFile('index.html',baa)