import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    }
})

const SizeModel = mongoose.model("size",sizeSchema)
export default SizeModel