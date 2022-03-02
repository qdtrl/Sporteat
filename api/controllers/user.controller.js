const User = require("../models/user.model");
const bcrypt = require('bcryptjs');

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(402).json({
        message: 'User not found'
      })
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if (correctPassword) {
      req.session.user = user;
      res.status(201).json({
        token: "Bearer " + token,
        user
      })
    } else {
      res.status(400).json({
        message: 'Incorrect password'
      })
    }
  } catch (e) {
    res.status(400).json({
      message: `fail ${e}`,
    })
  }
}

exports.signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashPassword
    });

  // req.session.user = user;
    res.status(201).json({
      user
    })
  } catch (e) {
    res.status(400).json({
      message: `fail ${e}`,
    })
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(201).json({
      status: 'success',
      data: {
        user
      }
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}