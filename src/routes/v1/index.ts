import express from 'express'
import bookRouter from './books'

const router = express.Router()

// v1以下のルーティング
router.use('/books', bookRouter)

export default router
