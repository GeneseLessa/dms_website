import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    credentials: {
      email: { type: String, required: [true, "Informe um e-mail"] },
      password: {
        type: String,
        required: [true, "Informe uma senha de acesso"],
      },
      passwordRecovery: { type: Boolean, default: false },
      isActive: { type: Boolean, default: true },
    },

    permissions: {
      level: { type: Number, default: 3 },
      rootPermition: { type: Boolean, default: false },
    },

    profile: {
      fullName: String,
      avatar: String,
      alias: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
