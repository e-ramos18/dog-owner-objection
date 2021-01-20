const express = require('express')
const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({
    message: 'express running'
  })
})

app.listen(port)
