const jwt = require("jsonwebtoken");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ message: "Can't find token..." });
    }
    const token = await req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).send({ message: "Token not valid..." });
    }
    let validToken = jwt.verify(token, PRIVATE_KEY);
    console.log({validToken});
    if (!validToken) {
      return res.status(401).send({ message: "Can't verify token..." });
    }     


    req.user = validToken;
    
  } catch (error) {
    res.status(401)
    console.log(error);
  }finally{
    next()
  }
};

module.exports = verifyToken;