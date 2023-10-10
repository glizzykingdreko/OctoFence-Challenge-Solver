const babelParser = require("@babel/parser");
const fs = require("fs");

const getOctofenceJslc = require("./helpers/cookieExtractor");
const generateFingerPrint = require("./helpers/fingerprint");


function solveChallenge(script) {
    const ast = babelParser.parse(script, {
        sourceType: "module",
        plugins: ["jsx"]
    });
    return {
        "octofence_jslc":       getOctofenceJslc(ast),
        "octofence_jslc_fp":    generateFingerPrint().toString()
    }
}

let script = process.argv[2];
script = fs.readFileSync(script, "utf8");




// solve the challenge
const result = solveChallenge(script);
// is passed the parameter --output?
if (process.argv.includes("--output")) {
    // get the index of the parameter
    const index = process.argv.indexOf("--output");
    // get the file name
    const fileName = process.argv[index + 1];
    // write the file
    fs.writeFileSync(fileName, JSON.stringify(result, null, 4));
} else {
    // print the result
    console.log(JSON.stringify(result, null, 4));
}