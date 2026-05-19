import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { contactRouter } from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(
  cors({
    origin: process.env.CLIENT_URL?.split(',') ?? ['http://localhost:5173'],
  }),
)
app.use(express.json({ limit: '10kb' }))

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'rudra-portfolio-api' })
})

app.use('/api/contact', contactRouter)

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`)
})
