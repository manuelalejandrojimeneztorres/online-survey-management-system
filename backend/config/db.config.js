module.exports = {
    DB: 'onlinesurveymanagementsystem',
    USER: 'root',
    PASSWORD: 'nuts55.JBY',
    dialect: 'mysql',
    HOST: 'localhost',
    pool: {
        min: 0,
        max: 5,
        idle: 10000,
        acquire: 30000,
    }
};
