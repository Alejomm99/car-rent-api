const express = require('express');
const dotenv = require('dotenv');
const {getSystemInfo, getNodeInfo} = require('./services/stats.service');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (request, response)=>{
    response.json({
        systemInfo: getSystemInfo(),
        nodeInfo: getNodeInfo()
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})