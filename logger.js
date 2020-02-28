var winston = require("winston");
require('winston-daily-rotate-file');

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`; // log 출력 포맷 정의
});

const options = {
    // log파일
    file: {
        level: process.env.level,
        filename: `./logs/error.log`, 
        handleExceptions: true,
        json: false,
        maxsize: 5242880, 
        colorize: false,
        format: combine(
            label({ label: "error" }),
            timestamp(),
            myFormat // log 출력 포맷
        )
    },
    console: {
        level: process.env.level,
        handleExceptions: true,
        json: false, // 로그형태를 json으로도 뽑을 수 있다.
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
module.exports = logger;
