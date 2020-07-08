BEGIN;

TRUNCATE
  dog,
  product,
  professional

  RESTART IDENTITY CASCADE;

  INSERT INTO dog (user_id, name, breed, birthday, home_date, size, is_active)
  VALUES
    (1, 'Fluffy', 'Poodle', '2020-05-20', '2020-07-12', 10, true);


  INSERT INTO product (
        category_id,
        is_active,
        brand,
        product_name,
        barcode,
        cost_small_dog,
        cost_medium_dog,
        cost_large_dog,
        purchase_text,
        description_text,
        canada_link,
        us_link
    )

    VALUES
           
    (1, true, 'Farmers Dog', 'Farmers Dog Fresh Pet Meals', '123x', 10, 20, 30, 'Subscribe to Farmers Dog', 'Gently cooked meals that are flash frozen and delivered directly to your door. This is the healthiest food available, but at higher price point than Kibble', 'https://www.thefarmersdog.com/', 'https://www.thefarmersdog.com/'),
    (2, true, 'Blueberry Pet Classics', 'Dog Collar', '1234bn', 8, 12, 14, 'Buy this collar', 'Highly rated and durable, this collar is simple and easy. Most new puppies will need a size small. Make sure to choose a regular collar and not martingale', 'https://www.amazon.ca/Blueberry-Pet-Classic-Collar-Collars/dp/B00HWQO66O/ref=sr_1_5?dchild=1&keywords=blueberry%2Bdog%2Bcollar&qid=1590942935&sr=8-5&th=1', 'https://www.amazon.com/Blueberry-Pet-Classic-Turquoise-Collars/dp/B00HRQAUN2/ref=sxin_7_ac_d_rm?ac_md=1-1-ZG9nIGNvbGxhcg%3D%3D-ac_d_rm&crid=NGCF9VC5T5F2&cv_ct_cx=collar+for+dogs&dchild=1&keywords=collar+for+dogs&pd_rd_i=B00HRQAUN2&pd_rd_r=7eb9dcfd-cd68-45f0-b1d5-f947e38dfce1&pd_rd_w=q1wTe&pd_rd_wg=wGmpU&pf_rd_p=a0516f22-66df-4efd-8b9a-279a864d1512&pf_rd_r=0ET6DZEX5YTGZ85AGYEY&psc=1&qid=1590942732&sprefix=collar%2Caps%2C166&sr=1-2-12d4272d-8adb-4121-8624-135149aa9081');

      
INSERT INTO professional (
        professional_type,
        name,
        address,
        link,
        phone,
        lat,
        lng,
        city,
        is_active
    )

    VALUES
    ('Veterinarian', 'Dundas West Animal Hospital', '2160 Dundas St W, Toronto, ON M6R 1X3', 'https://dundaswestvets.com/', '4165358387', 43.6532604, -79.4524876, 'Toronto', true);

    COMMIT;