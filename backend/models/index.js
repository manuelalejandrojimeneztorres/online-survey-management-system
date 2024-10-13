const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    operatorsAliases: false,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        idle: dbConfig.pool.idle,
        acquire: dbConfig.pool.acquire,
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.surveystatuses = require('./surveystatus.model.js')(sequelize, Sequelize);
db.surveys = require('./survey.model.js')(sequelize, Sequelize);
db.questiontypes = require('./questiontype.model.js')(sequelize, Sequelize);
db.questions = require('./question.model.js')(sequelize, Sequelize);
db.questionoptions = require('./questionoption.model.js')(sequelize, Sequelize);

db.surveystatuses.hasMany(db.surveys, {
    foreignKey: 'surveyStatusId'
});

db.surveys.belongsTo(db.surveystatuses, {
    foreignKey: {
        name: 'surveyStatusId',
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

//

db.surveys.hasMany(db.questions, {
    foreignKey: 'surveyId'
});

db.questions.belongsTo(db.surveys, {
    foreignKey: {
        name: 'surveyId',
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

// 

db.questiontypes.hasMany(db.questions, {
    foreignKey: 'questionTypeId'
});

db.questions.belongsTo(db.questiontypes, {
    foreignKey: {
        name: 'questionTypeId',
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

//

db.questions.hasMany(db.questionoptions, {
    foreignKey: 'questionId'
});

db.questionoptions.belongsTo(db.questions, {
    foreignKey: {
        name: 'questionId',
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

/* SurveyStatuses
Surveys
QuestionTypes
Questions
QuestionOptions */

module.exports = db;
