CREATE TABLE professional (
    id SERIAL PRIMARY KEY,
    professional_type TEXT,
    name TEXT,
    address varchar(60),
    link TEXT,
    phone TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    city TEXT,
    is_active boolean,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    deleted_at TIMESTAMP
);