import nextConnect from 'next-connect'
import bcrypt from 'bcrypt'
import db from '@/utils/db'
import { validateEmail } from '@/utils/validation'
import { createActivationToken } from '@/utils/token'
import User from '@/models/User'

const handler = nextConnect()

handler.post(async (req, res) => {
  try {
    await db.connectDb()
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      res.status(400).json({ message: 'Please fill in all fields' })
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email.' })
    }

    const user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: 'This email already exists.' })
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 8 characters.' })
    }
    const cryptedPassword = await bcrypt.hash(password, 12)
    const newUser = new User({ name, email, password: cryptedPassword })
    const addedUser = await newUser.save()
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    })

    const url = `${process.env.BASE_URL}/activate/${activation_token}`
    res.send(url)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default handler