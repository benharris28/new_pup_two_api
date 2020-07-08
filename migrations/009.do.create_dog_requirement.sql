CREATE TABLE dog_requirement (
    id SERIAL PRIMARY KEY,
    dog_id INTEGER,
    category_id INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
)