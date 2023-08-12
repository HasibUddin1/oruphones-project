import mongoose from "mongoose";

export default async function connect () {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected successfully')
        })

        connection.on('error', () => {
            console.log('Something wrong has happened')
        })
    } catch (error) {
        console.error(error)
    }
}