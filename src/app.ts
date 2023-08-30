import express from "express"
const app = express()
import route from './route/route'

app.use(express.json())
app.use(route)


app.listen(3000)