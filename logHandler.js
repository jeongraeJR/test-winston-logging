var logger = require('./logger');
function logErrors(err, req, res, next) {
    logger.debug(err.stack);
    next(err);
}

module.exports = logErrors;