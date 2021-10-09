const express = require('express');
const app = express();
const todoRouter =  require('./routes/todoRoute');
const todoService =  require('./services/todoService');

todoService.createTableIfNotExists();

app.use(express.json());

app.use(express.static('public'));

app.use('/', todoRouter);

app.listen(3000);
