CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    category_id INTEGER,
    is_active boolean,
    brand text,
    product_name text,
    barcode varchar(50),
    cost_small_dog numeric,
    cost_medium_dog numeric,
    cost_large_dog numeric,
    purchase_text text,
    description_text text,
    canada_link text,
    us_link text,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
);