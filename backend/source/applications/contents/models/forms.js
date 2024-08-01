import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Informe um nome para o formulário"],
    },
    instructions: String,
    fields: [
      {
        name: { type: String, required: [true, "O campo precisa ter um nome"] },
        placeholder: String,
        label: String,
        /*
         * The allowed types are:
         *
         * text, number, date, email, textarea
         * */
        fieldType: {
          type: String,
          required: [true, "É necessário informar o tipo do campo"],
        },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Form", formSchema);
