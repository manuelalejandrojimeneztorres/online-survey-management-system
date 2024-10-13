module.exports = (sequelize, Sequelize) => {
    const QuestionOption = sequelize.define('QuestionOption', {
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
        value: {
            type: Sequelize.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Value is required'
                },
                len: {
                    args: [1, 255],
                    msg: 'Value must be between 1 and 255 characters'
                }
            }
        }
    }, {
        tableName: 'QuestionOption',
        freezeTableName: true,
        underscored: false,
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_spanish_ci',
        indexes: [
            {
                name: 'AK_QuestionOption_QuestionID_Order',
                unique: true,
                fields: ['questionId', 'order']
            },
            {
                name: 'AK_QuestionOption_QuestionID_Value',
                unique: true,
                fields: ['questionId', 'value']
            }
        ]
    });

    return QuestionOption;
};
