import SizeModel from "../models/size.model.js"

export async function addSizes(req,res) {
    try {
        const {name} = req.body
        const newSize = new SizeModel({name})
        await newSize.save()
        res.status(201).json({
            success : true,
            message: "Size added successfully", newSize
        })
    } catch (error) {
        res.status(500).json({ message: "Error adding Size", error })
    }
}
export const getController =async (req,res)=>{
    try {
        
        const data = await SizeModel.find()

        return res.json({
            data : data,
            error : false,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}