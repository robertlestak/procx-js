const { spawn } = require("child_process");

async function procx(args) {
    return new Promise(async function(resolve, reject) {
        const cmd = spawn("procx", args);
        let output = "";
        let err = "";
        cmd.stdout.on("data", data => {
            output += data;
        })
        cmd.stderr.on("data", data => {
            err += data;
        })
        cmd.on("close", code => {
            if (code === 0) {
                if (output.length === 0) {
                    return resolve(null);
                }
                return resolve(output);
            } else {
                return reject(err);
            }
        })
    })
}

module.exports = procx;