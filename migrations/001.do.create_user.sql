CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    city TEXT,
    is_active boolean,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP 
)