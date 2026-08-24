import cloudinary from "./cloudinary";

export async function uploadToCloudinary(
  file: File,
  folder: string
): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type:
          file.type === "application/pdf" ? "raw" : "image",
      },
      (error, result) => {
        if (error) {
          console.error("========== CLOUDINARY UPLOAD ERROR ==========");
          console.error("message:", error.message);
          console.error("http_code:", error.http_code);
          console.error("name:", error.name);
          console.error("full error:", error);
          console.error("==============================================");

          reject(error);
          return;
        }

        console.log("CLOUDINARY UPLOAD RESULT:", result);

        if (!result?.secure_url) {
          reject(new Error("Cloudinary upload failed"));
          return;
        }

        resolve(result.secure_url);
      }
    );

    uploadStream.end(buffer);
  });
}