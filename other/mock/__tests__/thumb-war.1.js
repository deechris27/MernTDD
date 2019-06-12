import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (p1, p2) => p2

  const winner = thumbWar('Ken Wheeler', 'Deepak D')
  expect(winner).toBe('Deepak D')

  utils.getWinner = originalGetWinner
})
