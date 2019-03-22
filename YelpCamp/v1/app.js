const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => console.log(`Yelp Camp Server is Connected on port: ${port}!`))