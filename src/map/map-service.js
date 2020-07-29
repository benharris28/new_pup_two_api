const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const MapService = {
    async getMarkers(db, lat, lng) {
        
        let query = await db.raw( 
                    `select professional_id, name, address, lat, lng,  distance
                    from professional
                    
                    join (
                    SELECT professional_id as id,
                    (3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( lat ) ) ) ) AS distance
                    FROM professional) as s on s.id = professional.professional_id and distance < 10
                    ORDER BY distance 
                    LIMIT 20;`
                )

                return query.rows
               
            
            



         

   



         
    },
    updateMarker(db, id, update) {
        
    }
   
}

module.exports = MapService