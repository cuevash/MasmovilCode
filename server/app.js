const express = require('express')

// Mock-up phones's data
const DataPhones = [
  {
    id: '1',
    title: 'Samsung S6',
    description: 'Mobile from samsung, light, excellent camera, long batery',
    img: '/media/samsung_s6.jpeg',
    color: 'white',
    price: 200,
    priceUnit: 'euro'
  },
  {
    id: '2',
    title: 'Iphone 7',
    description: 'Mobile from Apple, light, excellent camera, long batery',
    img: '/media/Iphone7.jpg',
    color: 'white',
    price: 300,
    priceUnit: 'euro'
  }
]

// Create server
const app = express()

//
// ROUTES
//
app.get('/', (req, res) => {
  res.send('Hello World!!')
})

// List
app.get('/api/phones', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(DataPhones))
})

// Single element
app.get('/api/phones/:id', (req, res) => {
  console.log('Parms', req.params)

  // Find element
  let phone = DataPhones.find((ele) => ele.id === req.params.id)

  if (phone) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(phone))
  } else {
    // Resource not found
    res.status(404).send(`Phone with id:${req.params.id} not found!`)
  }
})

module.exports = app
