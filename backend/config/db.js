import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // "mongodb://localhost:27017/ebs", {
      "mongodb+srv://shresthadinesh71555:2KD8BRcc7ByqN80I@pahichan.nvaueck.mongodb.net/pahichan?retryWrites=true&w=majority&appName=pahichan", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
