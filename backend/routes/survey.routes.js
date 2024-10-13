module.exports = app => {
    const surveys = require('../controllers/survey.controller.js');

    var router = require('express').Router();

    // Create a new Survey
    router.post('/', surveys.create);

    // Retrieve all Survey
    router.get('/', surveys.findAll);

    // Retrieve a single Survey with id
    router.get('/:id', surveys.findOne);

    // Update a Survey with id
    router.put('/:id', surveys.update);

    // Delete a Survey with id
    router.delete('/:id', surveys.delete);

    app.use('/api/v1/surveys', router);
};
