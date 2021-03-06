import express from 'express'
import router from './routes/v1'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, '0.0.0.0', () => {
  console.log('Start on port 3000.')
})

app.use('/v1', router)

//一覧取得
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World')
})
