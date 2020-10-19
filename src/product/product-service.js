const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const ProductService = {
    async getById(db, id) {
        const product = await db
            .select('*')
            .from('product')
            .where('id', id)
            .first();
        product.attribute = await db.select('*')
            .from('product_attribute')
            .where('product_id', id)
       

        return product;

    },

    async getProductsForDogs(db, dog_id) {
        // Get all attributes and corresponding category_id for that dog_id
        // Output in an array
        const dog_attributes = await db
            .select('attribute_id', 'category_id')
            .from('dog_attribute')
            .where('dog_id', dog_id)
            .whereNull('deleted_at')

        console.log(dog_attributes)

        // Sort function
        // Takes in an array 
        let orderedByCategory = {};
        dog_attributes.forEach(attribute => {
            if (typeof orderedByCategory['c_' + attribute.category_id] === 'undefined') {
                orderedByCategory['c_' + attribute.category_id] = [];
            }
            orderedByCategory['c_' + attribute.category_id].push(attribute.attribute_id)
        })

        console.log(orderedByCategory)

        // Iterate over the keys of "OrderedByCategory"
        let products = [];
        for (const category of Object.keys(orderedByCategory)) {
            let i = Object.keys(orderedByCategory).indexOf(category);
            
            // 
            let sqlIn = orderedByCategory[category]
            let categoryId = Number(category.substring(2));

            // knex query
            let product = await db('product_attribute')
                .join('product', 'product.id', '=', 'product_attribute.product_id')
                .select('product_id')
                .whereIn('attribute_id', sqlIn)
                .where('product.category_id', categoryId)
                .whereNull('product.deleted_at')
                .groupBy('product_attribute.product_id')
                .first()
          
            console.log(product)

            if (typeof product !== "undefined") {
                products.push(await this.getById(db, product.product_id))
            }
            
        }
        console.log(products)
        return products;
        
    },

    async getProductsForDogs2(db, dog_id) {
        // Get all attributes and corresponding category_id for that dog_id
        // Output in an array
        const dog_attributes = await db
            .select('attribute_id', 'category_id')
            .from('dog_attribute')
            .where('dog_id', dog_id)
            .whereNull('deleted_at')

        console.log(dog_attributes)

        // Sort function
        // Takes in an array 
        let orderedByCategory = {};
        dog_attributes.forEach(attribute => {
            if (typeof orderedByCategory['c_' + attribute.category_id] === 'undefined') {
                orderedByCategory['c_' + attribute.category_id] = [];
            }
            orderedByCategory['c_' + attribute.category_id].push(attribute.attribute_id)
        })

        console.log(orderedByCategory)

        // Iterate over the keys of "OrderedByCategory"
        let products = [];
        for (const category of Object.keys(orderedByCategory)) {
            let i = Object.keys(orderedByCategory).indexOf(category);
            
            // 
            let sqlIn = orderedByCategory[category]
            let categoryId = Number(category.substring(2));

            // knex query
            let product = await db('product_attribute')
                .join('product', 'product.id', '=', 'product_attribute.product_id')
                .select('product_id')
                .whereIn('attribute_id', sqlIn)
                .where('product.category_id', categoryId)
                .whereNull('product.deleted_at')
                .groupBy('product_attribute.product_id')
                .first()
          
            console.log(product)

            if (typeof product !== "undefined") {
                products.push(await this.getById(db, product.product_id))
            }
            
        }
        console.log(products)
        return products;
        
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