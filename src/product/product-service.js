const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const ProductService = {
    async getById(db,id){
        const product  = await db
            .select('*')
            .from('product')
            .where('id',id)
            .first();
        product.attribute = await db.select('*')
            .from('product_attribute')
            .where('product_id', id)
       

        return product;

    },
    async getProductsForDog(db,dog_id) {
        const dog_attributes = await db 
            .select('attribute_id', 'category_id')
            .from('dog_attribute')
            .where('dog_id', dog_id)
            .whereNull('deleted_at')

            console.log(dog_attributes)

            let orderedByCategory = {};
            dog_attributes.forEach(attribute => {
              if(typeof orderedByCategory['c_'+attribute.category_id] === 'undefined'){
                orderedByCategory['c_'+ attribute.category_id] = [];
              }
              orderedByCategory['c_'+ attribute.category_id].push(attribute.attribute_id)
            })

            console.log(orderedByCategory)

            let products = [];
            Object.keys(orderedByCategory).forEach(async(category,i) => {
                let sqlIn = orderedByCategory[category]
                let categoryId = category.substring(2);
                
                // knex query
                let product = await db('product_attribute')
                    .join('product', 'product.id', '=', 'product_attribute.product_id')
                    .select('product_id')
                    .whereIn('attribute_id', sqlIn)
                    .where('product.category_id', categoryId)
                    .whereNull('product.deleted_at')
                    .groupBy('product_attribute.product_id')
                    .first()
                
                products.push(this.getById(db,product.product_id))
                if(orderedByCategory.length === i+1){
                    return products;
                }
    
            })

         
    },
    
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