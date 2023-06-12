const adminModel = require('../models/adminModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const getAdmins = async (req, res) => {
  try {
    const admins = await adminModel.find();
    res.send(admins);
  } catch (error) {
    res.status(500).send("Unable to retrieve admins...");
  }
}


const postAdmins = async (req, res) => {
  const { type, username, password, status, date } = req.body;

  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await adminModel.findOne({ username: req.body.username });
    if (user) {
      return res.status(403).send({ msg: "User with given username already exist" });
    }

    let newUser = await adminModel.create({
      ...req.body,
      password: hashedPassword
    });
    newUser.password = undefined;
    res.send("Admin saved successfully!");
  } catch (error) {
    res.status(500).send("an error occurred...");
    throw error;
  }
};

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await adminModel.findOne({ username: username })
    const validPassword = await bcrypt.compare(req.body.password, userExists.password);
    if (!validPassword)
      return res.status(400).send({ msg: "Invalid email or password!" });
    const token = jwt.sign({ ...userExists }, process.env.PRIVATE_KEY, { expiresIn: '1d' });
    res.status(200).send({
      msg: "You logged in successfully!",
      token: token,
      type: userExists.type
    });
  }
  catch (error) {
    res.status(500).send("an error occurred...");
    console.error(error)
  }
}

const deleteAdmin = async (req, res) => {
  let id = req.params.id;
  await adminModel.deleteOne({ _id: id });
  res.status(204).send();
}


module.exports = {
  getAdmins,
  postAdmins,
  loginAdmin,
  deleteAdmin
}