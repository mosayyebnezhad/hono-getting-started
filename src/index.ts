import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()


app.use('/static/*', serveStatic({ root: './' }))
app.use('/BeautifulPeople.ttf', serveStatic({ path: '/static/BeautifulPeople.ttf' }))

app.get('/', serveStatic({ path: '/static/index.html'}));

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
