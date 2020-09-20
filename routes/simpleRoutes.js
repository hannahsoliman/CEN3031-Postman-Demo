const { getInfo, postInfo } = require("../controllers/simpleController.js"),
  express = require("express"),
  router = express.Router();
//get request - /api/getInfo path variable leads to controller file - execute specific functions in controller functions
router.get("/getInfo", getInfo);
//post request
router.post("/postInfo", postInfo);

module.exports = router;
