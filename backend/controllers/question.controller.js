const db = require('../models');
const Question = db.questions;
const Op = db.Sequelize.Op;

// Create and Save a new Question
exports.create = (req, res) => {
    // Validate request
    if (!req.body.surveyID || !req.body.questionTypeID || !req.body.order || !req.body.text || !req.body.isMandatory) {
        res.status(400).send({
            message: 'Content can not be empty.'
        });

        return;
    }

    // Create a Question
    const question = {
        surveyID: req.body.surveyID,
        questionTypeID: req.body.questionTypeID,
        order: req.body.order,
        text: req.body.text,
        isMandatory: req.body.isMandatory
    };

    // Save Question in the database
    Question.create(question)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the Question.'
            });
        });
};

// Retrieve all Question from the database
exports.findAll = (req, res) => {
    Question.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving Question.'
            });
        });
};

// Find a single Question with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Question.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Question with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error retrieving Question with id=' + id
            });
        });
};

// Update a Question by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Question.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Question was updated successfully.'
                });
            } else {
                res.send({
                    message: `Cannot update Question with id=${id}. Maybe Question was not found or req.body is empty.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating Question with id=' + id
            });
        });
};

// Delete a Question with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Question.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Question was deleted successfully.'
                });
            } else {
                res.send({
                    message: `Cannot delete Question with id=${id}. Maybe Question was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete Question with id=' + id
            });
        });
};
