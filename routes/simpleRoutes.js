const { getInfo, postInfo } = require("../controllers/simpleController.js"),
  express = require("express"),
  router = express.Router();

router.get("/getInfo", getInfo);
router.post("/postInfo", postInfo);

module.exports = router;
