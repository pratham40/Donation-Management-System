import path from "path"

import multer from "multer"

const upload=multer({
    dest:"uploads/",
    limits:{ fileSize: 80*1024*1024 },  // max size 80mb
    storage:multer.diskStorage({
        destination:"uploads/",
        filename:(_req,file,cb)=>{
            cb(null,file.originalname)
        }
    }),
    fileFilter: (_req, file, cb) => {
        let ext = path.extname(file.originalname).toLowerCase()
        const allowedImageFormats = ['.jpg', '.jpeg', '.webp', '.png']
        
        if (allowedImageFormats.includes(ext)) {
            cb(null, true)
        } else {
            cb(new Error(`Unsupported file type! ${ext}`), false)
        }
    }
})

export default upload