const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const MapService = {
    async getMarkers(db, lat, lng) {
        
        let query = await db.raw( 
                    `select marker_id, name, address, lat, lng,  distance
                    from markers
                    join (
                    SELECT marker_id as id,
                    (3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( lat ) ) ) ) AS distance
                    FROM markers) as s on s.id = markers.marker_id and distance < 10
                    ORDER BY distance 
                    LIMIT 20;`
                )

                return query.rows
               
            
            



         

   



         
    },
    updateMarker(db, id, update) {
        
    }
   
}

module.exports = MapService