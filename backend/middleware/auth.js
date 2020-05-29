const jwt = require("jsonwebtoken");
const jwt_token_secret_string =
  "asdaksdandkandaff16fs1df6s1df6s1df6s511fs61dfsdfsg51as6d1";

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = jwt.verify(token, jwt_token_secret_string);
    const userId = decodeToken.userId;
    if (req.body.userId && req.body.userId !== userId) throw "Invalid user ID";
    else next();
  } catch {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};
