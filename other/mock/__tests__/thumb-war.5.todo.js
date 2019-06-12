// use the jest __mocks__ directory
import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

// remove the inline mock function and jest
// will use the one that exists in the
// __mocks__ directory which I created for you
// already (you're welcome)
jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  }
})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Deepak D')
  expect(winner).toBe('Deepak D')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Deepak D'])
  })
})

/*
Hint below





















































Hint #1:

jest.mock(relativePathToModuleToMock)




 */
