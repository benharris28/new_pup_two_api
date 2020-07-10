BEGIN;

TRUNCATE
  product

  RESTART IDENTITY CASCADE;


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
    (2, true, 'Blueberry Pet Classics', 'Dog Collar', '1234bn', 8, 12, 14, 'Buy this collar', 'Highly rated and durable, this collar is simple and easy. Most new puppies will need a size small. Make sure to choose a regular collar and not martingale', 'https://www.amazon.ca/Blueberry-Pet-Classic-Collar-Collars/dp/B00HWQO66O/ref=sr_1_5?dchild=1&keywords=blueberry%2Bdog%2Bcollar&qid=1590942935&sr=8-5&th=1', 'https://www.amazon.com/Blueberry-Pet-Classic-Turquoise-Collars/dp/B00HRQAUN2/ref=sxin_7_ac_d_rm?ac_md=1-1-ZG9nIGNvbGxhcg%3D%3D-ac_d_rm&crid=NGCF9VC5T5F2&cv_ct_cx=collar+for+dogs&dchild=1&keywords=collar+for+dogs&pd_rd_i=B00HRQAUN2&pd_rd_r=7eb9dcfd-cd68-45f0-b1d5-f947e38dfce1&pd_rd_w=q1wTe&pd_rd_wg=wGmpU&pf_rd_p=a0516f22-66df-4efd-8b9a-279a864d1512&pf_rd_r=0ET6DZEX5YTGZ85AGYEY&psc=1&qid=1590942732&sprefix=collar%2Caps%2C166&sr=1-2-12d4272d-8adb-4121-8624-135149aa9081'),
    (3, true, 'Petsafe', 'Nylon Leash', '1234bkln', 18, 18, 18, 'Buy this leash', 'No need go get too fancy. This leash will get the job done', 'https://www.amazon.ca/PetSafe-Durable-Traditional-Available-Multiple/dp/B01FJWB322?ref_=s9_apbd_omg_hd_bw_b6rpdvX&pf_rd_r=5NDVPNYBWBMERQTCQ4PW&pf_rd_p=26b34232-aa2a-5bbe-8c9e-f76de4116fae&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=6292251011', 'https://www.amazon.com/PetSafe-Nylon-Leash-Royal-Blue/dp/B003D0C5H0/ref=sr_1_4?dchild=1&keywords=petsafe&qid=1594345231&s=pet-supplies&sr=1-4'),
    (4, true, 'Amazon Basics', 'Stainless Steel Water and Food Bowls (11 x 3 inches)', '1234kjyd', 20,20,20, 'Buy these bowls', 'Basic stainless steel bowls', 'https://www.amazon.ca/AmazonBasics-Stainless-Steel-Dog-Bowl/dp/B01DOP5S9K/ref=sr_1_1_sspa?dchild=1&keywords=dog+bowl&qid=1594345317&s=pet-supplies&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUlU1VDlPTU5HUkFDJmVuY3J5cHRlZElkPUEwMDg3NDYzMVEzT0UzNTQwWlZUViZlbmNyeXB0ZWRBZElkPUEwNTQ1NDgyMzRGUUdYQjZCQzM2SiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=', 'https://www.amazon.com/AmazonBasics-Stainless-Steel-Dog-Bowl/dp/B01DOP5S9K/ref=sr_1_1_sspa?crid=2HCJQGT67WY0&dchild=1&keywords=dog+bowl&qid=1594345434&sprefix=dog+bowl%2Caps%2C190&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRUIzRldIV1A5OFRSJmVuY3J5cHRlZElkPUEwMjAwNDQ4OVVXVTVOR0g0VTJFJmVuY3J5cHRlZEFkSWQ9QTA2MjA4MjQ4SkNJSEU5MUtaVEEmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl');

      

   

    COMMIT;