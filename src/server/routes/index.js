
const home = require('./lib/home'),
    _ = require('lodash');

module.exports = (app) => {
    app.use('/',home());
    // not found middleware
    app.use((req,res,next) => {
        let err = new Error('Not Found');
        err.statusCode = 404;
        return next(err);
    });
    // Internal Error middleware 
    app.use((err,req,res,next) => { 
        if(_.isNull(err.statusCode) || !_.isNumber(err.statusCode) || _.isUndefined(err.statusCode)){
            err.statusCode = 500;
            err.message = 'Internal Error';
            return res.status(err.statusCode).json(JSON.stringify(err));
        }
    });
}