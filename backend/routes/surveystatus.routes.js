module.exports = app => {
    const surveyStatuses = require('../controllers/surveystatus.controller.js');

    var router = require('express').Router();

    // Create a new SurveyStatus
    router.post('/', surveyStatuses.create);

    // Retrieve all SurveyStatus
    router.get('/', surveyStatuses.findAll);

    // Retrieve a single SurveyStatus with id
    router.get('/:id', surveyStatuses.findOne);

    // Update a SurveyStatus with id
    router.put('/:id', surveyStatuses.update);

    // Delete a SurveyStatus with id
    router.delete('/:id', surveyStatuses.delete);

    app.use('/api/v1/survey-statuses', router);
};
