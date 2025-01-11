import type { HttpContext } from '@adonisjs/core/http'

import ShortenUrl from '#services/shorten_url'
import { inject } from '@adonisjs/core'
import vine from '@vinejs/vine'
import { urlSchema } from '#validators/url'

@inject()
export default class UrlsController {
  constructor(private urlShortenerService: ShortenUrl) {}

  async shortenUrl({ request, response }: HttpContext) {
    const body = request.only(['url'])

    const validatedUrl = await vine.validate({ schema: urlSchema, data: body })

    const shortenUrl = await this.urlShortenerService.retrieveUrl(validatedUrl.url)

    return response.status(200).json({ url: validatedUrl.url, short_url: shortenUrl })
  }

  async redirectUrl({ response, request }: HttpContext) {
    const url = request.completeUrl()

    const longUrl = await this.urlShortenerService.returnUrlFromShortUrl(url)

    if (!longUrl) {
      return response.noContent()
    }

    return response.redirect(longUrl, true)
  }
}
