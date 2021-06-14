const express = require('express');
const app = express();
const port = process.env.PORT || 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const DB = "mongodb+srv://mongouser:mongo12345@cluster0.brh2h.mongodb.net/restaurentappDB?retryWrites=true&w=majority";
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())



let db;

app.get('/' , (req, res)=>{
    res.send("Hi from express restaurent DB");
});

app.get('/location', (req,res)=>{
    db.collection('location').find().toArray((err, result)=>{
        res.send(result);
    })
});

app.get('/rest/:id' , (req,res)=>{
    let {id} = req.params;
    db.collection('restaurentInfo').find({_id:id}).toArray((err, result)=>{
        res.send(result);
    })
})

app.get('/restaurentinfo' , (req,res)=>{

    var condition = {};
    var sortcondition = {cost:1}
    if(req.query.sort){
        sortcondition = {cost:Number(req.query.sort)}
    }
    if(req.query.city && req.query.mealtime){
        condition = {$and:[{city:req.query.city}, {"time.mealtime":req.query.mealtime}]}
    }else if(req.query.mealtype){
        condition = {"type.mealtype":req.query.mealtype};
    }else if(req.query.city){
        condition = {city:req.query.city};
    }else if(req.query.mealtime){
        condition = {"time.mealtime":req.query.mealtime};
    }else if(req.query.lcost && req.query.hcost){
        condition = {$and:[{cost:{$lt:Number(req.query.hcost), $gt:Number(req.query.lcost)}}]}
    }
    db.collection('restaurentInfo').find(condition).sort(sortcondition).toArray((err, result)=>{
        res.send(result);
    })
})
app.get('/menu', (req,res)=>{
    db.collection('menu').find().toArray((err, result)=>{
        res.send(result);
    })
})
app.get('/mealtime' , (req,res)=>{
    db.collection('mealtime').find().toArray((err, result)=>{
        res.send(result);
    })
})

app.get('/mealtype', (req,res)=>{
    db.collection('mealtype').find().toArray((err,result)=>{
        res.send(result);
    })
})

app.get('/order', (req,res)=>{
    db.collection('order').find().toArray((err,result)=>{
        res.send(result);
    })
})

app.post('/placeorder' , (req,res)=>{
    db.collection('order').insert(req.body , (err,result)=>{
        if(err) throw err;
        res.send('Data added');
    })
})

MongoClient.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err, connection)=>{
    if(err)console.log(err);
    db = connection.db('restaurentappDB');
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})