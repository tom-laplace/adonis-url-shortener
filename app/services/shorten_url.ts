import Url from '#models/url'

export default class ShortenUrl {
  async retrieveShortenUrl(url: string) {
    let dbUrl = await this.returnUrlFromShortUrl(url)

    if (dbUrl) {
      return dbUrl
    }

    const shortenedUrl = this.shortenUrl()

    await this.insertUrl(url, shortenedUrl)

    const createdUrl = await this.returnShortUrlFromUrl(url)

    if (!createdUrl) {
      throw new Error('Error while shortening the URL, please try again')
    }

    return createdUrl
  }

  async insertUrl(url: string, shortenedUrl: string) {
    await Url.create({
      url: url,
      shortUrl: shortenedUrl,
    })
  }

  async returnShortUrlFromUrl(url: string) {
    const dbUrl = await Url.findBy('url', url)

    if (dbUrl) {
      return dbUrl.shortUrl
    }
  }

  async returnUrlFromShortUrl(url: string) {
    const dbUrl = await Url.findBy('short_url', url)

    if (dbUrl) {
      return dbUrl.url
    }
  }

  shortenUrl() {
    return 'http://localhost:3333/' + this.generateEndpointId()
  }

  generateEndpointId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }
}
