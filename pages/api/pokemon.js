export default function handler(req, res) {
  const { body: { name, weight }, method } = req
  if (method === 'POST') {
    res.status(200).json({ name, weight })
  } else {
    res.status(200).json({ text: 'pokemon!!'})
  }
}