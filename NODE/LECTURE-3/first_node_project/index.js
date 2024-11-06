//Checking axios using common js moduling

const axios = require('axios');

// axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=5fb7c2bc')
//     .then((response) => {
//         console.log(response.data);
//     });


// Async await syntax

async function fetch() {
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5fb7c2bc');
    console.log(response.data);
}

fetch();  