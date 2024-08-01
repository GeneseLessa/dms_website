import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    credentials: {
      email: { type: String, required: [true, "Informe o seu e-mail"] },
      password: { type: String, required: [true, "Informe a sua senha"] },
    },

    access: {
      isActive: { type: Boolean, default: true },
      isRoot: { type: Boolean, default: false },
    },

    profile: {
      fullName: String,
      avatar: String,
      alias: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("credentials.password")) return next();

  bcrypt.genSalt(10).then((salt) => {
    bcrypt.hash(user.credentials.password, salt).then((hash) => {
      user.credentials.password = hash;
      next();
    });
  });
});

export default mongoose.model("User", userSchema);
