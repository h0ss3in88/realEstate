module.exports = (app) => {
    app.set('port' , process.env.PORT || 3300 );
    app.set('x-powered-by',false);
}