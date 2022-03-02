const axios = require('axios');
const url = 'http://localhost:3000/api/';

// USER TESTS

const user1 = {
  email: 'test@test.com',
  username: 'test',
  password: 'test',
}
const user2 = {
  email: 'test@test.com',
  username: 'email',
  password: 'test',
}
const user3 = {
  email: 'name@test.com',
  username: 'test12',
  password: 'test12',
}

describe('Route Users', () => {
  test('#1 - Unsigned User', () => {
    axios
      .post(url + 'signin')
      .then(res => {
        expect(res).toBeDefined()
        expect(res.status).toBe(402)
        expect(res.message).toBe('User not found')
      })
  })
  test('#2 - Sign Up', () => {
    axios
      .post(url + 'signup', user1)
      .then(res => {
        expect(res).toBeDefined()
        expect(res.status).toBe(201)
        expect(res.user.username).toBe(user.user)
        expect(res.user.email).toBe(user.email)
      })
  })
  test('#3 - Sign Up Same Email', () => {
    axios
      .post(url + 'signup', user2)
      .then(res => {
        expect(res).toBeDefined()
        expect(res.status).toBe(400)
        expect(res.message).toBe("fail MongoServerError: E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"test@test.com\" }")
      })
  })
  test('#4 - Sign In', () => {
    axios
      .post(url + 'signup', user1)
      .then(res => {
        expect(res).toBeDefined()
        expect(res.status).toBe(400)
        expect(res.message).toBe("fail MongoServerError: E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"test@test.com\" }")
      })
  })

})
