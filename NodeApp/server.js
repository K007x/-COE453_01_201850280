const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Name: Abdullatif Alowayyid</h1> <h2>ID: 201850280 </h2>');
    }
);

app.listen(3000, () => {
    console.log('Server is up on 3000');
    }
);
