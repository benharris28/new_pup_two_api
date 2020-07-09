const DogService = {
   
    async getById(db,id){
        const dog  = await db
            .select('*')
            .from('dog')
            .where('id',id)
            .first();
        dog.requirement = await db.select('*')
            .from('dog_requirement')
            .where('dog_id', id)
        dog.attribute = await db.select('*')
            .from('dog_attribute')
            .where('dog_id', id)
        dog.selection = await db.select('*')
            .from('dog_selection')
            .where('dog_id', id)

        return dog;

    }
}

module.exports = DogService;