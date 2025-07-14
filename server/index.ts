import express from 'express'
import path from 'path'
import routes from './routes'

const app = express()
const port = process.env.PORT || 5173

app.use(express.json())
app.use('/api', routes)

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})