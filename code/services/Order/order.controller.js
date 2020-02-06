const Orders = require("./order.model");

module.exports = {
  /**
   * @param {number} req.query.productId
   * Returns average ratings and individual rating of the product
   * @example curl 'localhost:8080/order/v1/ratings?productId=4'
   */
  ratings: async (req, res) => {
    const productId = Number(req.query.productId);
    if (!productId)
      return res.status(400).json({ err: "Insufficient Parameters" });
    const ratings = await Orders.aggregate([
      {
        $match: {
          productId
        }
      },
      {
        $group: {
          _id: "$ratings",
          count: { $sum: 1 }
        }
      },
      {
        $sort:{
          _id:-1
        }
      }
    ]);
    const averageRating = average(ratings);
    return res.json({ ratings,averageRating });
  },
  /**
   * @param {Number} req.query.count
   * populates orders table with random 50 values to get started with if count is not provided
   * @example curl 'localhost:8080/order/v1/populate?count=20' 
   */
  populate: async (req, res) => {
    const productIds = [null,1, 2, 3, 4, 5];
    const userIds = [null, 5, 3, 6, 5, 7,1];
    const genRandom = () => Math.floor(Math.random()*5+1);
    const count = req.query.count? Number(req.query.count): 50;
    for (let i = 0; i < count; i++) {
      const packet = {
        productId: productIds[genRandom()],
        userId: userIds[genRandom()],
        ratings: genRandom()
      };
      await Orders.create(packet);
      console.log("Saved Packet",packet);
    }
    return res.json({"msg":`saved ${count} values`});
  },
  /**
   * returns all orders that exist in table
   * @example curl 'localhost:8080/order/v1'
   */
  get: async (req,res) =>{
    const entries = await Orders.find();
    return res.json(entries)
  },
};
/**
 * returns average of all the ratings 
 * @param {Array} arr An array of individual ratings 
 */
function average(arr) {
  let totalRatings = 0;
  let totalUsers = 0;
  for (let i = 0; i < arr.length; i++) {
    const {_id,count} = arr[i]
    totalRatings  += _id*count;
    totalUsers += count;
  }
  const avgValue = totalRatings/totalUsers;
  return avgValue ? avgValue.toFixed(2) : 0;  
}
