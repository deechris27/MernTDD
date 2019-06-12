// avoid monkey-patching with jest.mock
import thumbWar from '../thumb-war'
import * as utils from '../utils'

// add an inline mock with the jest.mock API
//
// jest.mock(
//   relativePathToModuleToMock,
//   functionThatReturnsMockObject
// )
//
// (Hint #1)

test('returns winner', () => {
  // remove the next two lines
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Deepak D')
  expect(winner).toBe('Deepak D')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Deepak D'])
  })

  // remove the next line
  utils.getWinner.mockRestore()
})

/*
Hint below:














































jest.mock('../utils', () => {
  return {
    // ...
    // see answer in the solution file
  }
})

 */
