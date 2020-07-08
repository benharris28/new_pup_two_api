CREATE TABLE dog_attribute (
    id SERIAL PRIMARY KEY,
    dog_id INTEGER,
    attribute_id INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
)