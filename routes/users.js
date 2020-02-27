var express = require("express");
require("express-async-errors");
var router = express.Router();

/* GET users listing. */
router.get("/", async function(req, res, next) {
    let result = await getParam();
    if (!result) {
        throw new Error("parameter required.");
    }
    res.send("respond with a resource");
});

router.post("/", async function(req, res, next) {
    res.json(req.body.id);
});

const getParam = param => {
    return new Promise(function(resolve, reject) {
        if (param) resolve(param);
        else reject(new Error('rr'));
    });
};
module.exports = router;
