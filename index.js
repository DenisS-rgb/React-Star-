const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
    fs.readFile('./index.html', 'utf8', (err, html) => { 
        if (err) {
            response.status(500).send('sorry, out of order');
            return;
        }
        response.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
