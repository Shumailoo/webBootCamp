const mongoose =require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser: true});

const fruitSchema =new mongoose.Schema({
    name: String,
    rating: Number
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit({
    name: "Apple",
    rating: 8
});

// fruit.save();

// Fruit.find(function(err,fruits){
//     if(err){
//         console.log("Error");
//     }
//     else{
//         console.log(fruits);
//     }
// });

Fruit.find().then((fruits)=>{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
});

