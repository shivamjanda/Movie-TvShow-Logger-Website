import mongoose from "mongoose";

// Schema for the model for user
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true}, // username field for singup
    email: {type: String, required: true, unique: true}, // password field for signup
    password: {type: String, required: true}
})
// name = model, schema = userSchema
// creating UserModel
const UserModel = mongoose.model("User", UserSchema)

export {UserModel as User}