const express = require('express') ;
const { createCategory, getAllCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router() ;

router.post('/', /// them Danh Muc
    createCategory
) ;
router.get('/', /// lay tat ca Danh Muc
    getAllCategory
);
router.put('/:id' ,
    updateCategory
)
router.delete('/:id' ,
    deleteCategory
)

module.exports = router