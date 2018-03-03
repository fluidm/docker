const net = require('net');
const config = require('./config');
const hexy = require('hexy');
const logger = require('log4js').getLogger();
logger.level = config.logger.level;

net.createServer(function(client) {
    const targetHost = process.argv[3];
    const targetPort = process.argv[4];

    logger.info("Connect to target server: tcp://" + targetHost + ':' + targetPort);
    const targetServer = net.connect(targetPort, targetHost);


    client.on('data', (data) => {
        logMessage('C', data);
        targetServer.write(data);
    });

    client.on('end', () => {
        logger.debug('C close connection :END');
        targetServer.destroy();
    });

    targetServer.on('data', (data) => {
        logMessage('S', data);
        client.write(data);
    });

    targetServer.on('end', () => {
        logger.debug('S close connection :END');
        client.destroy();
    });

}).listen(config.server.port, config.server.host);

logger.info('listen ' + config.server.host+':'+config.server.port);

function logMessage(who, data)
{
    const ascii = /^[ -~\t\n\r]+$/;

    if (ascii.test(data)) {
        logger.debug(who + ' TXT >>> --------------------------------\n' + data.toString());
    } else {
        logger.debug(who + ' HEX >>> --------------------------------\n' + hexy.hexy(data, {html: true}));
    }
}