                        --------Broomball Gear--------

Get broomball gear data, including product name, price, brand name and category name.

                          ....How to use this API....

--There are 3 routes to initially choose from, each will send back an array of objects as the response.
1.) /products
2.) /brands
3.) /categories

--Each route can add a parameter to get a specific product, brand or category.

/products...
The parameter for /products is a number of the product_id (i.e. /products/10).

/brands...
The paramter for /brands is a name of the brand. (i.e. /brands/Blue ox).

/categories...
The parameter for /categories is a name of the category. (i.e. /categories/brooms).

--The products route is the only route where you can fully utilize CRUD(create, read, update and delete).

There is a GET request on /products/:id? that can take a parameter(:id?) which is the product_id number.

There is a POST request on /products/insert that accepts a request body object
{
     "name": "",
     "price": 0.00,
     "brand_id": 0,
     "cat_id": 0
}
where "name" accepts a string value, "price" accepts a number with 2 decimals and 6 total numbers and
"brand_id" and "cat_id" are integers.

There is a PUT and DELETE request on /products/:id, where the parameter(:id) is the product_id number
for the object that is to be updated or deleted. For the PUT request, the request body object accepts
{
     "name": "",
     "price": 0.00,
     "brand_id": 0,
     "cat_id": 0
}
where "name" accepts a string value, "price" accepts a number with 2 decimals and 6 total numbers and
"brand_id" and "cat_id" are integers.

The DELETE request contains no body and will just delete the product where the product_id is equal to the
parameter from /products/:id.