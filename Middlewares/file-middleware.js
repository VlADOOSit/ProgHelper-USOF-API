const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'avatars/')
    },
    filename(reg, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const types = ['image/png', 'image/jpg', 'image/jpeg'];

const fileFilter = (reg, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

module.exports = multer({storage, fileFilter});