# Product Variables Growth

- Assumption
    - Use case is just updating and adding the variables.
    - History of updates are not required, only recent values are to dealt with.
    - The variables will grow over time.
    - Database used supports JSON/Arrays or is flexible with schema. (MongoDB can be used)
    - The tool that will solve the problem mentioned will be used by Internal teams and will not be available for public but it's values can be used to derive some value which is being shown to user/customer.

- Solution

    - A simple commodity configuration page can solve the problem of this variable addition/updation. All the products registered have different identities (i.e different product ID). 
    - So if we have a central configuration stored in our database for each product which can be updated from the configuration page used by the operations team as it's value changes.
    - An example of how basic structure of config of the product will look like.
    
    ```js
    {
        productId:4800,
        productName:"Kace Reversible Sectional Sofa Slate Gray",
        region:"seattle",
        fixedProperties:[{
            param: "pp",
            display: "Purchase Price",
        },
        {
            param: "clr",
            display: "Colour",
        },
        {
            param: "fin",
            display: "Finishing",
        }],
        derivedProperties:[{
            param:"tta",
            display: "Time to assemble product",
            value:2,
            qtyType:"time-day",
        },{
            param:"delTime",
            display: "Delivery Time",
            value:1,
            qtyType:"time-day"
        }]
    }
    ```
    - Now here I have kept two types of properties fixed and derived, if I assume you have dealt with fixed in some way. This table can be only for the dervied properties only.
    - Now a user can also add his/her custom property to the table  provided he fills in the configuration object properly which can be ensured from front-end properly.
    - The values can be provided in simple GET APIs which can be used by anyone in the company.
  

- Now coming to the question, how to ensure that these values are updated?
  - There would be operations team which would be responsible for filling these values as soon as a product of certain ID is sold. 
  - A notification system can be build around that configuration which would trigger at a certain interval to check if the values are filled if not a notification is sent to the team to update it.
  - Proper escalation methodology can be set up which will ensure the value are added for sure.

Now if we assume we have a front-end which facilitates user to update the configuration from this portal. Some features that can be built on top of it are
- If history of data is maintained somewhere then we can get an idea of how much time a new technician will take and how much time generally it takes to finish off a project.
- Wear and tear of particular brand/type of product can help business to take informed decisions.

