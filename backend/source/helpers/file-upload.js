import multer from "multer";
import crypto from "crypto";
import path from "path";

class UploadImage {
  // by default I just upload a single file
  constructor(isSingle = true) {
    this.storage = multer.diskStorage({
      // req was ignored here
      destination: function(_, file, cb) {
        const fileType = file.mimetype.split("/")[0];
        const fileDir = path.join("media", fileType);

        cb(null, fileDir);
      },
      // req was ignored here too
      filename: function(_, file, cb) {
        const hash = crypto.createHash("sha256");
        hash.update(file.originalname + Date.now());

        const uniqueFilename = hash.digest("hex");
        const extension = path.extname(file.originalname);
        const newFilename = `${uniqueFilename}${extension}`;

        cb(null, newFilename);
      },
    });

    if (isSingle) {
      this.fileUpload = multer({ storage: this.storage }).single("file");
      return;
    }

    this.fileUpload = multer({ storage: this.storage }).array("files");
  }

  uploadSingle(req, res) {
    this.fileUpload(req, res, (err) => {
      if (err) {
        return res.json({ error: true, result: "Cannot upload file" });
      }

      const { file } = req;
      if (!file) {
        return res.json({ error: true, result: "Cannot upload file" });
      }

      const newFilename = file.filename;
      return res.json({ error: false, result: newFilename });
    });
  }

  uploadArray(req, res) {
    this.fileUpload(req, res, (err) => {
      if (err) {
        return res.json({ error: true, result: "Cannot upload files" });
      }

      const { files } = req;
      if (!files || files.length === 0) {
        return res.json({ error: true, result: "Cannot upload files" });
      }

      const newFilenames = files.map((file) => file.filename);
      return res.json({ error: false, result: newFilenames });
    });
  }
}

export default UploadImage;
