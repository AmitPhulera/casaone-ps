const Orders = require("./order.model");

module.exports = {
  /**
   * @param {number} req.query.productId
   * Returns average ratings and individual rating of the product
   */
  ratings: async (req, res) => {
    const { productId } = req.query;
    if(!productId)
        return res.status(400).json({err:"Insufficient Parameters"});
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
      }
    ]);
    const allReviews = sum(ratings.map(rate => rate._id * rate.count));
    const averageReviews = allReviews / ratings.length;
    return res.json({ ratings, averageReviews });
  }
};
function sum(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    tmp = tmp + arr[i];
  }
  return tmp;
}
