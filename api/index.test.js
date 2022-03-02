const axios = require('axios');
const url = 'http://localhost:3000/api/';

// USER TESTS

const user = {
  email: 'test@test.com',
  name: 'test',
  password: 'test',
}

describe('Route Users', () => {
  test('#1 - Sign In User', async () => {
    axios
      .post(url + 'signin')
      .then(res => {
        console.log(res);
        expect(res).toBeDefined()
        
      })
  })
})

// INGREDIENTS TESTS
describe('Route Ingredients', () => {
  test('#1 - GET /ingredients', async () => {
    axios
    .get(url + 'ingredients')
    .then(res => {
      console.log(res);
      expect(res).toBeDefined()
      expect(res.statusCode).toBe(202)
      expect(res.body.message).toBe('message.user.nothing')
    })
  })
})

// MEAL TESTS
describe('Route Meals', () => {
  test('#1 - GET /users', async () => {
    axios
      .get(url + 'users')
      .then(res => {
        console.log(res);
        expect(res).toBeDefined()
        expect(res.statusCode).toBe(202)
        expect(res.body.message).toBe('message.user.nothing')
      })
  })
})