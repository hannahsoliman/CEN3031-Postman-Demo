const getInfo = (req, res) => {
  //if had a DB, would retrieve that data then return response - json format
  return res.json({ message: "Your information here" });
};

const postInfo = (req, res) => {
  //post that information to your DB - return a confirmation - json format
  return res.json({
    message: "Information successfully posted: " + req.body.info,
  });
};

module.exports = { getInfo, postInfo };
