import express,{Express,Request,Response} from 'express'
import { PORT } from './utils/secrets'

const app:Express = express()

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.send('hello ')
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})
