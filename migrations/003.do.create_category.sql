CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    category_name text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
);