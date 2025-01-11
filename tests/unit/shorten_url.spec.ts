import ShortenUrl from '#services/shorten_url'
import { test } from '@japa/runner'

test.group('#generateEndpointId', () => {
  const service = new ShortenUrl()

  test('assure ids are differents', ({ assert }) => {
    let set = new Set()

    for (let i = 0; i < 10000; i++) {
      set.add(service.generateEndpointId())
    }

    assert.equal(set.size, 10000)
  })
})
