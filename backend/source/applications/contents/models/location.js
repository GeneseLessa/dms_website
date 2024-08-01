import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Informe o título do mapa"] },
    content: {
      type: String,
      required: [true, "Necessário informar o código para o mapa"],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model("Location", locationSchema);
