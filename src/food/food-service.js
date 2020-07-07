const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const FoodService = {
    getAllFood(db) {
        return db
            .from('food')
            .select('*')

         
    },
    insertFood(db, newFood) {
        return db
            .insert(newFood)
            .into('food')
            .returning('*')
            .then(([food]) => food)
    },
}

module.exports = FoodService