const httpContext = require('express-http-context');
const log4js = require('log4js');
const jsonLayout = require('log4js-json-layout');

// add layout
log4js.addLayout('json', jsonLayout);

// configure log4js
log4js.configure({
    appenders: {
        console: {
            type: 'console',
            layout: {
                type: 'json'
            }
        }
    },
    categories: {
        default: {
            appenders: ['console'],
            level: 'debug'
        }
    }
});

// get logger from log4js
const log4jsLogger = log4js.getLogger();

// override the logger methods from log4js to add requestId/traceId in the logs (custom fields in the logs)
const logger = {
    info: (message) => {
        return log4jsLogger.info({ requestId: httpContext.get('requestId'), message: message });
    },
    error: (message) => {
        return log4jsLogger.error({ requestId: httpContext.get('requestId'), message: message });
    },
    debug: (message) => {
        return log4jsLogger.debug({ requestId: httpContext.get('requestId'), message: message });
    },
    warn: (message) => {
        return log4jsLogger.warn({ requestId: httpContext.get('requestId'), message: message });
    },
    verbose: (message) => {
        return log4jsLogger.verbose({ requestId: httpContext.get('requestId'), message: message });
    },
    log: (level, message) => {
        return log4jsLogger.log({ level: level, requestId: httpContext.get('requestId'), message: message });
    },
}

// export logger
module.exports = logger;
