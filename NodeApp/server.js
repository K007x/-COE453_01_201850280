const express = require('express');
const app = express();
const path = require('path');
const htmlFilePath = path.join(__dirname, 'index.html');


app.get('/', (req, res) => {
    res.sendFile(htmlFilePath);
    }
);

app.listen(3000, () => {
    console.log('Server is up on 3000');
    }
);
