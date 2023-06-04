import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import Order from "./../Models/OrderModel.js"

const orderRouter = express.Router();

//CREATE ORDER
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if(orderItems && orderItems.length === 0){
      res.status(400)
      throw new Error('No order items')
      return
    }else {
      console.log("else")
      const order = new Order({
        orderItems,
        user:req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
      });

      const createOrder = await order.save()
      res.status(201).json(createOrder)
    }
  })
);

export default orderRouter;