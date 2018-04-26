const express = require('express'),
    path = require('path'),
    _router = express.Router();
module.exports = () => {
    _router
        .route('/')
        .get((req,res,next) => {
            return res.sendFile(path.resolve(__dirname,'../','../','../','client','index.html'));
        });
    return _router;
}    
