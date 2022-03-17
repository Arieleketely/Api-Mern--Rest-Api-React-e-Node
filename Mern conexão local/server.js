const express=require('express');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose'); 

const port=process.env.PORT || 3000
const app=express();

mongoose.connect('mongodb://localhost:27017/pessoas',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},function(err){

 
    if(err){   
        console.log(err)
}
else{
    console.log('Mongo DB CONECTADO com sucesso')
}
})
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.get('/',function(req,res){
    res.json({menssage:"Hello Word!"});
});

app.listen(port,function(){
    console.log('Servidor rodando na porta ${port}')
});