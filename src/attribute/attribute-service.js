const AttributeService = {
   
    async getById(db,id){
        const attribute  = await db
            .select('*')
            .from('attribute')
            .where('id',id)
            .first();
      

        return attribute;

    }
}

module.exports = AttributeService;