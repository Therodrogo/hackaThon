const jwt =  require('jsonwebtoken');
const User = require('../models/userModel');

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) return res.status(400).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, 'secretToken');
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0, _id: 0 });
    if (!user) return res.status(400).json({ message: "No user found" });

    next();
  } catch(e){
    return res.status(400).json({ message: "Unauthorized!" });
 }  
};

module.exports = { verifyToken };