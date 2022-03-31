require('dotenv').config()
const express = require("express")
const querystring = require('querystring')
const app = express()
const port = 8888

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URL = process.env.REDIRECT_URL


console.log(process.env.CLIENT_ID)
//ap

app.get("/", (req, res) => {
  const data = {
    name: 'Badou',
    isAwesome: true
  }
  res.json(data)
})

// app.get('/awesome-generator', (req, res) => {
//   const { name, isAwesome } = req.query
//   res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`)
// })

app.get('/login', (req, res) => {
  const queryParams = querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URL,
  })

  res.redirect(`https://accounts.spotify.com/authorize?$
  {queryParams}`)
})

app.listen(port, () => {
  console.log(`Express app listeing at http://localhost:${port}`)
})
