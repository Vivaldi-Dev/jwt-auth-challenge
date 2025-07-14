import express,{Express,Request,Response} from 'express'
import { PORT } from './utils/secrets'
import authRotes from './routes/auth'

const app:Express = express()

app.use(express.json())

app.use('/api',authRotes)

app.get('/',(req:Request,res:Response)=>{
    res.send('hello ')
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})
