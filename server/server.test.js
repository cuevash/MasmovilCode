
// Imports
const request = require('supertest')
const app = require('./app')

// Route /
describe('Test route: /', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200)
    expect(response.type).toEqual('text/html')
  })
})

// Route /api/phones
describe('Test route: /', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/phones')
    expect(response.status).toEqual(200)
    expect(response.type).toEqual('application/json')
  })
})
