const getInfo = (req, res) => {
  //retrieve information

  return res.json({ message: "Your information here" });
};

const postInfo = (req, res) => {
  //post information

  return res.json({
    message: "Information successfully posted: " + req.body.info,
  });
};

module.exports = { getInfo, postInfo };
