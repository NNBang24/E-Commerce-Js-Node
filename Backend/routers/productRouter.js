const express = require('express') ;
const { createProduct, getAllProducts, updateProduct } = require('../controllers/productController');
const { uploadSingleImage } = require('../middlewares/uploadMiddleware');
const { resizeImage } = require('../middlewares/imageProcessingMiddleware');
const router = express.Router() ;

router.post('/' ,
    uploadSingleImage('imageURL') ,
    resizeImage ,
    createProduct
)
router.get('/' ,
    getAllProducts
)
router.put('/:id',
    uploadSingleImage('imageURL'),
    resizeImage,
    updateProduct
)
module.exports = router