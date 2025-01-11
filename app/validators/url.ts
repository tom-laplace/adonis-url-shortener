import vine from '@vinejs/vine'

export const urlSchema = vine.object({
  url: vine.string().url(),
})
