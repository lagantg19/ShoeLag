const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const secret = "hellolagan";

const createToken = (_id) => {
  return jwt.sign({ _id }, "hellolagan", { expiresIn: "3d" });
};

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const user_id = user._id;
    const admin=user.admin;
  

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token,user_id,admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//signup user

const signupUser = async (req, res) => {
  
  const { email, password,admin } = req.body;

  try {
    const user = await User.signup(email, password,admin);

    //create a token
    const token = createToken(user._id);
    const user_id = user._id;

    res.status(200).json({ email, token ,user_id,admin});
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
};
//all users
const getUser=async (req,res)=>{
  const allUser = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(allUser);

}

module.exports = { loginUser, signupUser,getUser };
