const config = {
    test: process.env.APP_URL,
    server: {
        port: 7777,
        host: "0.0.0.0"
    },
    logger: {
        level: "debug"
    }
};


module.exports = config;