module.exports = (sequelize, Sequelize) => {
    const SurveyStatus = sequelize.define('SurveyStatus', {
        status: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Status is required'
                },
                isIn: {
                    args: [['Planned', 'Open', 'Closed', 'Suspended']],
                    msg: 'Status must be one of: Planned, Open, Closed, Suspended'
                },
                len: {
                    args: [1, 50],
                    msg: 'Status must be between 1 and 50 characters'
                }
            }
        }
    }, {
        tableName: 'SurveyStatus',
        freezeTableName: true,
        underscored: false,
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_spanish_ci',
        indexes: [
            {
                name: 'AK_SurveyStatus_Status',
                unique: true,
                fields: ['status']
            }
        ]
    });

    return SurveyStatus;
};
