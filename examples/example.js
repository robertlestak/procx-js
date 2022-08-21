const procx = require("../index.js");

async function main() {
    let ex = process.argv[2];
    if (!ex) {
        console.log("Usage: node example.js <example>");
        process.exit(1);
    }

    let examples = [
        'fs',
        'redis-list',
        'redis-pubsub'
    ]
    // ensure ex in examples
    if (!examples.includes(ex)) {
        throw new Error(`${ex} is not a valid example`);
    }

    let args = require('./'+ex+'.json')
    
    try {
        let resp = await procx(args);
        if (resp == null) {
            console.log("No data");
        } else {
            console.log(resp);
        }
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    await main();
})()