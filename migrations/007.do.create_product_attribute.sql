CREATE TABLE product_attribute (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    attribute_id INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
)