import mongoose from "mongoose";

const textualSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Informe o título da publicação"] },
    icon: String,
    resume: String,
    content: {
      type: String,
      required: [true, "Não é possível salvar publicação vazia"],
    },
    // if true, it's showed always full size
    alwaysVisible: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Textual", textualSchema);
