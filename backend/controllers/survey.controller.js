const db = require('../models');
const Survey = db.surveys;
const Op = db.Sequelize.Op;

// Create and Save a new Survey
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.description || !req.body.startDate || !req.body.surveyStatusID) {
        res.status(400).send({
            message: 'Content can not be empty.'
        });

        return;
    }

    // Create a Survey
    const survey = {
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        minResponses: req.body.minResponses,
        maxResponses: req.body.maxResponses,
        surveyStatusID: req.body.surveyStatusID
    };

    // Save Survey in the database
    Survey.create(survey)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the Survey.'
            });
        });
};

// Retrieve all Survey from the database
exports.findAll = (req, res) => {
    Survey.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving Survey.'
            });
        });
};

// Find a single Survey with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Survey.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Survey with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error retrieving Survey with id=' + id
            });
        });
};

// Update a Survey by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Survey.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Survey was updated successfully.'
                });
            } else {
                res.send({
                    message: `Cannot update Survey with id=${id}. Maybe Survey was not found or req.body is empty.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating Survey with id=' + id
            });
        });
};

// Delete a Survey with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Survey.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Survey was deleted successfully.'
                });
            } else {
                res.send({
                    message: `Cannot delete Survey with id=${id}. Maybe Survey was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete Survey with id=' + id
            });
        });
};
