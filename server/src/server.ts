import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: "test 1" },
    { id: 2, name: "test 2" },
    { id: 3, name: "test 3" },
  ])
})

app.listen(3333)