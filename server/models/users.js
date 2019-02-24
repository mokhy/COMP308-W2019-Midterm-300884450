let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

// create a User model class
let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "Username is required"
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "Email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);

// configure options for UserSchema

let options = ({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);