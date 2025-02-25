const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a file buffer to Cloudinary.
 * @param {Buffer} buffer - The file buffer to upload.
 * @param {string} fileName - The name of the file.
 * @returns {Promise<string>} - The secure URL of the uploaded file.
 */
const uploadToCloudinary = (buffer, fileName) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ public_id: fileName }, (err, result) => {
            if (err) return reject(err);
            resolve(result.secure_url);
        });

        streamifier.createReadStream(buffer).pipe(stream);
    });
};

module.exports = { uploadToCloudinary };
