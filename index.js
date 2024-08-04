'use strict'

const autocannon = require('autocannon');
(async function start () {
    try {
        const result = await autocannon({
            url: 'http://localhost:4000',
            connections: 1, //default
            pipelining: 1, // default
            //duration: 1800, // default,
            amount: 1000000, // default
            overallRate: 200 // default
        })
        console.log('autocannon result ', result);
    } catch (e) {
        console.error('autocannon error', e);
    }
})();
