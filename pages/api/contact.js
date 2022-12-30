// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email
      || !email.includes("@")
      || !name
      || name.trim() === ''
      || !message
      || message.trim() === '') {
      res.status(400).json({ message: 'invalid input' });
    }

    // Store it in a db


    const newMsg = {
      email,
      name,
      message
    }

    res.status(201).json({ message: 'Thank you for sending a message' })
  }
}
