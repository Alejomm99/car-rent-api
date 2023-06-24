const express = require('express')
const router = express.Router();
const {getSystemInfo, getNodeInfo} = require('../services/stats.service');

router.get('/', (request, response)=>{
    response.json({
        systemInfo: getSystemInfo(),
        nodeInfo: getNodeInfo()
    });
});

module.exports = router;

