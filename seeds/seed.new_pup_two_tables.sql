BEGIN;

TRUNCATE
  users,
  category

  RESTART IDENTITY CASCADE;

  INSERT INTO users (email, password, city, is_active)
  VALUES
    ('test1@test.com', 'test', 'Toronto', true);


  INSERT INTO category (
        category_name
    )

    VALUES
    ('food'),
    ('collar'),
    ('leash'),
    ('bowls'),
    ('harness'),
    ('tags'),
    ('poo_bags'),
    ('crate'),
    ('toys');

      


    COMMIT;