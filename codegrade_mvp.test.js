const { server } = require('./mocks/server')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

beforeAll(() => {
  require('./src/index')
  server.listen()
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})

describe('just a sanity test', () => {
  test('[1] fun bus heading is in the DOM', () => {
    expect(screen.findByText(/fun bus/i, { selector: 'h1' }))
  })
})
