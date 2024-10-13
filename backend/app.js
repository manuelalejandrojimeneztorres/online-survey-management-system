const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8100',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
// Normal use; doesn't delete the database data
// db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Online Survey Management System API',
    description: 'This API facilitates the creation, management, and analysis of online surveys. It provides endpoints for creating surveys, managing questions and responses, tracking survey status, and retrieving analytical data. Designed for scalability and flexibility, this API ensures efficient survey handling and real-time data access for comprehensive survey management.',
    version: '1.0.0',
    status: 'Up and Running',
    routes: [
      { path: '/api/v1/survey-statuses', description: 'Retrieve the list of available survey statuses.' },
      { path: '/api/v1/surveys', description: 'Access and manage surveys, including creation and retrieval of survey data.' },
      { path: '/api/v1/question-types', description: 'Retrieve the list of available question types for surveys.' },
      { path: '/api/v1/questions', description: 'Manage survey questions, including creation and retrieval of questions.' },
      { path: '/api/v1/question-options', description: 'Manage available options for survey questions.' }
    ],
    documentationLink: '/docs',
    authEnabled: true,
    authDocsLink: '/auth-docs',
    showExample: true,
    exampleRequest: 'curl -X GET "http://localhost:8080/api/v1/surveys?status=Open" -H "Authorization: Bearer {your_token}"',
    supportEmail: 'support@onlinesurveymanagementsystem.com',
    termsLink: '/terms',
    privacyLink: '/privacy'
  });
});

require('./routes/surveystatus.routes')(app);
require('./routes/survey.routes')(app);
require('./routes/questiontype.routes')(app);
require('./routes/question.routes')(app);
require('./routes/questionoption.routes')(app);

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

/* var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; */
