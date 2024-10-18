const { default: mongoose } = require("mongoose");

//defining Contacts schema in Mongoose style
const contactSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = Contacts;