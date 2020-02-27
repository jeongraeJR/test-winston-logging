var winston = require("winston");

var logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "error.log" })]
});

if (process.env.NODE_ENV == "production") {
    logger.level = "info";
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
}

module.exports = logger;