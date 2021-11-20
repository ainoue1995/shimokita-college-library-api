import express from 'express'
import router from './routes/v1'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(process.env.PORT || 3000, () => {
  console.log('Start on port 3000.')
})

app.use('/v1', router)

//一覧取得
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World')
})
