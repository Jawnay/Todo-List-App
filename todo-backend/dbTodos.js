const mongoose = require ('mongoose')
const { todo } = require('node:test')

const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("todos", todoSchema);