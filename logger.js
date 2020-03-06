var winston = require("winston");
require('winston-daily-rotate-file');
require("dotenv").config();

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});

const options = {
    // log파일
    file: {
        level: process.env.level,
        filename: `./logs/error.log`, 
        handleExceptions: true,
        json: false,
        prettyPrint: true,
        maxsize: 5242880, 
        colorize: false,
        format: combine(
            label({ label: "error" }),
            timestamp(),
            myFormat 
        )
    },
    console: {
        level: process.env.level,
        handleExceptions: true,
        json: false,
        colorize: true,
        format: combine(label({ label: "nba_express" }), timestamp(), myFormat)
    }
};

let logger = new winston.createLogger({
    transports: [
        new winston.transports.Console(options.console) 
    ],
    exitOnError: false
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.DailyRotateFile(options.file)
    );
}


logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

module.exports = logger;
