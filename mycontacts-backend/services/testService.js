/* This is a test file for playing around with Mongoose and MongoDB.
The kittens are just placeholders (plus they are cute). */

const { default: mongoose } = require("mongoose");
const kittySchema = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const Kitten = mongoose.model('Kitten', kittySchema);

const newKitten = asyncHandler( async () => {
    
    const fluffy = new Kitten({ name: "Fluffy"});

    console.log(fluffy.name);

    await fluffy.save();

    return console.log("New Kitten saved successfully");
})

const findAllKittens = asyncHandler( async () => {
    const findAllKittens = await Kitten.find();

    return findAllKittens;
})

newKitten().then(result => console.log(result)).catch(err => console.error(err));

findAllKittens().then(result => console.log(result)).catch(err => console.error(err));