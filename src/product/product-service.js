const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const ProductService = {
    getAllProducts(db, active) {
        return db
            .from('products')
            .select('*')
            .where('active', active)
         
    },
    insertProduct(db, newProduct) {
        return db
            .insert(newProduct)
            .into('products')
            .returning('*')
            .then(([product]) => product)
    },
    updateProduct(db, product_id, productUpdate) {
        return db('products')
            .where({ product_id })
            .update(productUpdate)

    },
}

module.exports = ProductService