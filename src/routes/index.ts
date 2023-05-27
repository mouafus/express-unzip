import {Router} from "express";
import multer from "multer";
import AdmZip from "adm-zip";
import * as fs from "fs";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage}).single('file');


router.post('/', upload, (req, res) => {
    const filename = req.file?.originalname ?? "";
    const zip = new AdmZip(`uploads/${filename}`);

    zip.extractAllTo("extracted/", true);

    fs.unlinkSync(`uploads/${filename}`);

    res.status(200).json({
        "success": true,
        "message": "File successfully decompressed",
    });
})

export default router;