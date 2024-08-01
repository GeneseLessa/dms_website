import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Informa o título do iconizável"] },
    targetPage: {
      type: mongoose.Types.ObjectId,
      required: [true, "Informe a página alvo"],
    },
    items: { type: Number, default: 1 },
    isActive: { type: Boolean, default: true },
    isTabular: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model("List", listSchema);
