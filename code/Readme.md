## Ratings Problem Statement

This is the code solution of 2nd problem statement.

The app is strucutered in way that it can be extended as per the architecture that was told in solution_2.md

## To start

Make sure you have docker and docker compose in your system.
After you have installed them.

```
cd code
npm i
docker-compose up
```

The dev server starts on port 8080 on your localhost.


There are 3 routes that are exported of Orders services

- GET /order/v1/ratings => To get ratings of product, the route takes productId as query parameter
``` sh
#For example 
curl 'localhost:8080/order/v1/ratings?productId=4'
# It will return a json of form
# {"ratings":[{"_id":3,"count":2},{"_id":2,"count":6},{"_id":1,"count":2}],"averageReview":"2.00"} 
```
- GET /order/v1 => To get all the orders in order table
- GET /order/v1/populate => To populate dummy data in the DB. By default it creates 50 records, if you pass count in query parameters it will create the entries equal to count.