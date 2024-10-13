module.exports = app => {
    const questionTypes = require('../controllers/questiontype.controller.js');

    var router = require('express').Router();

    // Create a new QuestionType
    router.post('/', questionTypes.create);

    // Retrieve all QuestionType
    router.get('/', questionTypes.findAll);

    // Retrieve a single QuestionType with id
    router.get('/:id', questionTypes.findOne);

    // Update a QuestionType with id
    router.put('/:id', questionTypes.update);

    // Delete a QuestionType with id
    router.delete('/:id', questionTypes.delete);

    app.use('/api/v1/question-types', router);
};
