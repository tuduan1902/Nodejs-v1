import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'
import userRouter from './resources/user/user.router'
import itemRouter from './resources/item/item.router'
import listRouter from './resources/list/list.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req,res) => {
  res.send({ message: 'hello' })
})

app.post('/', (req,res) => {
  console.log(req.body)
  res.send({ message : 'ok '})
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}