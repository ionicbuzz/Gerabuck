const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//defining User schema in Mongoose style
const userSchema = new mongoose.Schema({
    uuid: mongoose.Schema.Types.UUID,
    username: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

//function to hash and salt passwords using a presave hook in Mongoose.
//Identical to hook in sequelize
userSchema.pre('save', async function(next) {
    const user = this;
    
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

//Attach a comparePassword method to the userSchema. Exported as a part of userSchema itself
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;