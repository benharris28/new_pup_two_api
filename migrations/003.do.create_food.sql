 CREATE TABLE food (
     food_id SERIAL PRIMARY KEY,
     brand TEXT,
     product TEXT,
     category TEXT,
     image TEXT,
     rating INTEGER,
     number_of_ratings INTEGER,
     cost_large_dog INTEGER,
     cost_medium_dog INTEGER,
     cost_small_dog INTEGER,
     purchase_text TEXT,
     description_text TEXT,
     link TEXT
 )
 