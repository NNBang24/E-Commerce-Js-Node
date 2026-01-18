const { Product } = require('../models');

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        next(error) ;
    }
}

exports.createProduct = async (req, res, next) => {
    try {
     
        const { name, description, price, priceSale, imageURL, sizes, tags, categoryId } = req.body;
        const processedImage = req.file ? req.file.processedFileName : null;
        
        const newProduct = await Product.create({
            name,
            description,
            price: Number(price),
            priceSale: Number(priceSale),
            imageURL: processedImage,
            sizes: JSON.parse(sizes),
            tags: JSON.parse(tags),
            categoryId
        });
        res.status(201).json({
            message: 'Tao thanh cong san pham',
            data: newProduct
        })
    } catch (error) {
        next(error)
    }
}
exports.updateProduct = async ( req , res , next) => {
    try {
        
        const { name, description, price, priceSale, sizes, tags, categoryId } = req.body;
        const processedImage = req.file ? req.file.processedFileName : null;

        const updateData = {
            name,
            description,
            price: Number(price),
            priceSale: Number(priceSale),
            sizes: sizes ? JSON.parse(sizes) : null,
            tags: tags ? JSON.parse(tags) : null,
            categoryId
        };

        if (processedImage) {
            updateData.imageURL = processedImage;
        }

        const [updatedRows] = await Product.update(updateData, {
            where: {
                id :req.params.id 
            }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Khong tim thay san pham' });
        }
         const updateProduct = await Product.findByPk(req.params.id) ;
        res.json({ message: 'Cap nhat san pham thanh cong' , data : updateProduct});
    } catch (error) {
        next(error);
    }
}

