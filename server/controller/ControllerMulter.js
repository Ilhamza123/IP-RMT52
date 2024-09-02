const { Belt } = require('../models');
const {v2:cloudinary} = require ('cloudinary')
cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});



class ControllerMulter {
    static async Image(req, res, next) {
        try {
            // Mencari belt berdasarkan id
            const belt = await Belt.findByPk(req.params.id);

            // Jika belt tidak ditemukan, lempar error
            if (!belt) throw { name: "belt not found" };  

            // Mendapatkan file dari request
            const file = req.file;
            console.log(file);

            // Mengubah buffer file menjadi base64
            const base64 = file.buffer.toString("base64");

            // Mengupload file ke Cloudinary
            const spec = await cloudinary.uploader.upload(`data:${file.mimetype};base64,${base64}`);

            // Mengupdate imgUrl belt dengan URL dari Cloudinary
            await Belt.update({ imgUrl: spec.secure_url }, { where: { id: req.params.id } });

            // Mengirimkan respon sukses
            res.status(200).json({ message: "success update imgUrl", belt });
        } catch (error) {
            // Menangani error
            next(error);
        }
    }
}

module.exports = ControllerMulter;