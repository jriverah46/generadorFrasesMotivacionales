const express=require('express')
const app=express()
const quotesRoutes=require('./routes/frasesRoutes')

app.listen(3000,()=>console.log("server running on port 3000"))
app.use(express.json())

app.use('/random',quotesRoutes)

app.use((req,res)=>{res.send("ingrese ruta valida")})