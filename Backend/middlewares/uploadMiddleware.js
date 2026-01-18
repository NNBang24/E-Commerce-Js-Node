const multer = require('multer') ;
const path = require('path') ;

const multerStorage = multer.diskStorage(
    {
        destination : (req , file , callBack) => {
            const tempPath = path.join(__dirname,'..','public','temp') ;
            callBack(null,tempPath)
        },
        filename: (req, file, callBack) => {
            const originalname = path.parse(file.originalname).name ;
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) ;
            const ext = path.extname(file.originalname)
            callBack(null , `image-${originalname}-${uniqueSuffix}${ext}`) ;
        }
    }
)  ;

const multerFilter = (req , file ,callBack) => {
    if(file.mimetype.startsWith('image')){
        callBack(null , true)
    }
    else {
        callBack(new Error('khong phai anh , vui long chi tai len file anh !'), false) ;
    }

}

const upload = multer({
    storage : multerStorage ,
    fileFilter : multerFilter ,
    limits: {fileSize : 5 * 1024 * 1024}
})


exports.uploadSingleImage = (fieldName) => {
    return upload.single(fieldName) ;
}