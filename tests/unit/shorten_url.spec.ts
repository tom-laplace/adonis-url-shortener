import UrlService from '#services/url'
import { test } from '@japa/runner'

test.group('#generateEndpointId', () => {
  const service = new UrlService()

  test('assure ids are differents', ({ assert }) => {
    let set = new Set()

    for (let i = 0; i < 10000; i++) {
      set.add(service.generateEndpointId())
    }

    assert.equal(set.size, 10000)
  })

  test('generate valid id', ({ assert }) => {
    const id = service.generateEndpointId()

    assert.match(id, /[0-9a-z]+/)
  })
})

test.group('#generateShortUrl', () => {
  const service = new UrlService()

  test('generate valid url', ({ assert }) => {
    const url = service.generateShortUrl()

    assert.match(url, /http:\/\/localhost:3333\/[0-9a-z]+/)
  })
})
