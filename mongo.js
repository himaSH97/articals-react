import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Nash:rnd4321@articalcluster.fh6lryy.mongodb.net/?retryWrites=true&w=majority/?directConnection=true";
  

const client =  MongoClient.connect(uri,(err,db)=>{
    if (err) throw err;
    const dbo = db.db("articalDB")
    const result = dbo.collection("uss").find({password:"a"})
    
    console.log(result)
});



/*
const collections = await db.listCollections().toArray();
const collectionNames = collections.map(c => c.name);
console.log(collectionNames);

const collectionName = 'uss';
const collection = db.collection(collectionName);
console.log(collection.findOne({},(err,result)=>{
    if(err) throw err;
    console.log(result);
}))






MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

*/
