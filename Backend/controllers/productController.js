const {Product} = require('../models') ;

exports.getAllProducts = async(req , res , next) => {
    try {
        const products = await Product.findAll({
            include : {
                
            }
        })
    } catch (error) {
        
    }
}

exports.createProduct = async(req, res,next) => {

}
middleware