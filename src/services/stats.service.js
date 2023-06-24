const os = require('node:os');

function getSystemInfo(){
    return{
        arch: os.arch(),
        platform: os.platform(),
        osType: os.type(),
        osRelese: os.release(),
        hostname: os.hostname(),
    };
}

function getNodeInfo(){
    return {
        version: process.version,
        uptime: process.uptime()
    };
}

module.exports = {
    getSystemInfo,
    getNodeInfo
}