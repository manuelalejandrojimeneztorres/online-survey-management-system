module.exports = (sequelize, Sequelize) => {
    const Survey = sequelize.define('Survey', {
        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Name is required'
                },
                len: {
                    args: [1, 255],
                    msg: 'Name must be between 1 and 255 characters'
                }
            }
        },
        description: {
            type: Sequelize.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: 'Description is required'
                },
                len: {
                    args: [1, 255],
                    msg: 'Description must be between 1 and 255 characters'
                }
            }
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                notNull: {
                    msg: 'Start date is required'
                }
            }
        },
        endDate: {
            type: Sequelize.DATE,
            allowNull: true,
            validate: {
                isDate: true
            }
        },
        minResponses: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
            validate: {
                isInt: true,
                min: 0
            }
        },
        maxResponses: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
            validate: {
                isInt: true,
                min: 0
            }
        }
    }, {
        tableName: 'Survey',
        freezeTableName: true,
        underscored: false,
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_spanish_ci',
        indexes: [
            {
                name: 'AK_Survey_Name',
                unique: true,
                fields: ['name']
            }
        ]
    });

    return Survey;
};
