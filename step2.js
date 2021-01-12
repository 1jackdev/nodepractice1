const fs = require("fs");
const axios = require("axios");

let path = process.argv[2];
function cat(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
    });
}

async function webCat(url) {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch(err) {
        console.log(`Error fetching ${url}:`)
        console.log(err);
    }
}

if (path.startsWith("http")) {
    webCat(path);
} else {
    cat(path);
}
