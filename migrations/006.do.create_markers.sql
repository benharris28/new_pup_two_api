CREATE TABLE markers (
    marker_id SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    lat DOUBLE PRECISION NOT NULL,
    lng DOUBLE PRECISION NOT NULL
)