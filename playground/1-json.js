const fs = require('fs');
// const book={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFile('1-json.json', bookJSON, ()=>{});

const dataBuffer=fs.readFileSync('1-json.json');
const data=JSON.parse(dataBuffer.toString());
data.age=100;
fs.writeFileSync('1-json.json', JSON.stringify(data));
