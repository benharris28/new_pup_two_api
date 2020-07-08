CREATE TABLE attribute (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
)