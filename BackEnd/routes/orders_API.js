const router = require("express").Router();
const { User } = require("../models/user_model");
const { Order } = require("../models/order_model");
const auth = require("../middlewares/auth");

router.post("/", auth, async (req, res) => {
  let {
    shippingDetails,
    products,
    userDetails,
    paymentModeData,
    totalPrice,
    paymentMode,
    paymentStaus,
    orderStatus
  } = req.body;

  let order = new Order({
    shippingDetails:shippingDetails,
    products:products,
    userDetails:userDetails,
    paymentModeData:paymentModeData,
    totalPrice:totalPrice,
    paymentMode:paymentMode,
    paymentStaus:paymentStaus,
    orderStatus:orderStatus
  })
  order = await order.save();
  res.send(order)

});


router.get('/my-orders', auth, async (req,res) => {
  const userID = req.user._id;
  console.log(userID)
  let user = await User.findById(userID);
  if (!user) {
    return res.status(400).send("Invalid user ID.");
  }

  let order = await Order.find({ 'userDetails._id' : userID })
  if(!order.length){
    return res.status(200).send({message : "No orders found!", data: order})
  }

  res.send({ message : "Here is your orders!", data : order })

});


module.exports = router;
