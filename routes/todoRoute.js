const router = require('express').Router();
const todoService = require('../services/todoService');

router.get('/tasks', async (req, res) => {
    const result = await todoService.getTodos();
    res.status(200).json(result);
});

router.delete('/tasks/:id', async (req, res) => {
     await todoService.deleteTodo(req.params.id);
    res.sendStatus(200);
});

router.post('/tasks', async (req, res) => {
    console.log(req.body);
    const result = await todoService.insertTodo(req.body);
    res.sendStatus(200);
});


module.exports = router;