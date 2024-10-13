module.exports = (sequelize, Sequelize) => {
    const QuestionType = sequelize.define('QuestionType', {
        type: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Type is required'
                },
                isIn: {
                    args: [['Open', 'Dropdown', 'Multiple Choice', 'Logical']],
                    msg: 'Type must be one of: Open, Dropdown, Multiple Choice, Logical'
                },
                len: {
                    args: [1, 50],
                    msg: 'Type must be between 1 and 50 characters'
                }
            }
        }
    }, {
        tableName: 'QuestionType',
        freezeTableName: true,
        underscored: false,
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_spanish_ci',
        indexes: [
            {
                name: 'AK_QuestionType_Type',
                unique: true,
                fields: ['type']
            }
        ]
    });

    return QuestionType;
};
