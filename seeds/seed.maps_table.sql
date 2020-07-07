BEGIN;

TRUNCATE
  markers
RESTART IDENTITY CASCADE;

INSERT INTO markers (name, address, lat, lng)
  VALUES
    ('Dundas West Animal Hospital', '2160 Dundas St W, Toronto, ON M6R 1X3', 43.6532604, -79.4524876),
    ('VCA Canada Secord Animal Hospital', '3271 Yonge St, Toronto, ON M4N 2L8', 43.7296429, -79.4053417);

 COMMIT;