/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UrlController = () => import('#controllers/urls_controller')

router.post('url/shorten', [UrlController, 'shortenUrl'])
router.get('/*', [UrlController, 'redirectUrl'])
