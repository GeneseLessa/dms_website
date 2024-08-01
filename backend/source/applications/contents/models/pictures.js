import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema(
  {
    /*
     * The possible kinds for this module are:
     *
     * carousel, album, banner
     * */
    kind: { type: String, required: [true, "Informe o tipo de módulo"] },
    title: { type: String, required: [true, "Informe o título do módulo"] },
    description: String,
    link: String,
    openInSite: { type: Boolean, default: false },
    pictures: [
      {
        url: { type: String, required: [true, "Informe o endereço da imagem"] },
        legend: String,
        link: String,
        openInSite: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Picture", pictureSchema);
