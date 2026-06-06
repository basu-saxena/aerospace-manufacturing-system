import cloudinary from "../configs/cloudinary.js";
import streamifier from "streamifier";

export const uploadFile = async (fileBuffer) => {
  if (!fileBuffer) {
    throw new Error("No file buffer provided");
  }

  return await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
      },
      (error, res) => {
        if (error || !res) {
          return reject(new Error("Error while uploading image to cloudinary"));
        }

        const url = res.secure_url;

        if (!url) {
          return reject(new Error("Invalid response from cloudinary"));
        }

        resolve(url);
      },
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};
