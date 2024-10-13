module.exports = app => {
    const questionOptions = require('../controllers/questionoption.controller.js');

    var router = require('express').Router();

    // Create a new QuestionOption
    router.post('/', questionOptions.create);

    // Retrieve all QuestionOption
    router.get('/', questionOptions.findAll);

    // Retrieve a single QuestionOption with id
    router.get('/:id', questionOptions.findOne);

    // Update a QuestionOption with id
    router.put('/:id', questionOptions.update);

    // Delete a QuestionOption with id
    router.delete('/:id', questionOptions.delete);

    app.use('/api/v1/question-options', router);
};
