import mongoose from "mongoose";
import slug from "slug";

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Informe o título da página"],
      unique: true,
    },
    slug: String,
    menuItem: String,
    isHome: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    isPrivate: { type: Boolean, default: false },
    contents: [
      {
        item: mongoose.Types.ObjectId,
        isActive: { type: Boolean, default: true },
      },
    ],
  },
  { timestamps: true },
);

pageSchema.pre("save", function(next) {
  const page = this;

  if (page.title) page.slug = slug(page.title);

  next();
});

export default mongoose.model("Page", pageSchema);
