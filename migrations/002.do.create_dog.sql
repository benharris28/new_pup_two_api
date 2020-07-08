CREATE TABLE dog (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT,
    breed TEXT,
    birthday DATE,
    home_date DATE NOT NULL,
    size NUMERIC,
    is_active boolean,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP

)