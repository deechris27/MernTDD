import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Deepak D')
  expect(winner).toBe('Deepak D')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Deepak D'])
  })
})
