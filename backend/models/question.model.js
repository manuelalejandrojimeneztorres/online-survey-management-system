module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('Question', {
        order: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Order is required'
                },
                isInt: true,
                min: 1
            }
        },
        text: {
            type: Sequelize.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Text is required'
                },
                len: {
                    args: [1, 255],
                    msg: 'Text must be between 1 and 255 characters'
                }
            }
        },
        isMandatory: {
            type: Sequelize.STRING(3),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Is mandatory is required'
                },
                isIn: {
                    args: [['No', 'Yes']],
                    msg: 'Is mandatory must be one of: No, Yes'
                },
                len: {
                    args: [1, 3],
                    msg: 'Is mandatory must be between 1 and 3 characters'
                }
            }
        }
    }, {
        tableName: 'Question',
        freezeTableName: true,
        underscored: false,
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_spanish_ci',
        indexes: [
            {
                name: 'AK_Question_SurveyID_Order',
                unique: true,
                fields: ['surveyId', 'order']
            },
            {
                name: 'AK_Question_SurveyID_Text',
                unique: true,
                fields: ['surveyId', 'text']
            }
        ]
    });

    return Question;
};
