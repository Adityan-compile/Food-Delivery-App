'use strict'

const user = require('../models/user')
const { deleteToken } = require('../utils/helpers.js')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

exports.deleteAccount = async (req, res) => {
  const refreshToken = req.body.refreshToken

  if (!refreshToken || refreshToken === undefined || refreshToken === null) {
    return res.status(400).json({ status: 400, message: 'Bad Request' })
  }

  try {
    const counted = await user.remove({
      _id: mongoose.Types.ObjectId(req.user._id)
    })
    if (counted === 0) {
      return res.status(409).json({ status: 409, message: 'Delete Error' })
    }
    await deleteToken(refreshToken)
    res.status(202).json({ status: 202, message: 'Delete Successful' })
  } catch (e) {
    return res.status(409).json({ status: 409, message: 'Delete Error' })
  }
}

exports.editAccount = async (req, res) => {
  const body = req.body

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' })
  }

  if (
    body.password &&
    body.password.length >= 8 &&
    body.password !== undefined &&
    body.password !== null
  ) {
    try {
      body.password = await bcrypt.hash(body.password, 10)
    } catch (e) {
      return res
        .status(500)
        .json({ status: 500, message: 'Internal Server Error' })
    }
  }

  try {
    // var foundUser = await user.findOne({ _id: mongoose.Types.ObjectId(req.user._id) });
    const doc = await user.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.user._id) },
      body,
      {
        new: true
      }
    )
    doc.password = undefined
    res.status(200).json({
      status: 200,
      message: 'Resource Updated Successfully',
      updated: doc
    })
  } catch (e) {
    res.status(404).json({ status: 404, message: 'User not Found' })
  }
}
