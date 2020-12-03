const express = require('express');
const path = require('path');

const MainRouter = require('./routes/MainRouter');
const UserRouter = require('./routes/UserRouter');

const port = process.env.port || 5000;

const app = express();

// app.get('/', (request, response) => {
//     console.log('GET REQUEST TO /');
//     response.send({id: 0, name: 'John'});
// });

// app.get('/', (request, response) => {
//     console.log('GET REQUEST TO /');
//     response.sendFile(path.join(__dirname, "about.html"));
// });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', MainRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`I am listening on port ${port}`)
});