const [Schema, model, ObjectId] = require("mongoose")

const User = new Schema({
   title: {
      type: "string",
      required: true
   },
   text: {
      type: "string",
      required: true
   },
   data: {
      type: "string",
      required: true
   },
   files: [{
      type: ObjectId,
      ref: "File"
   }]
})

module.exports = model('User', User)