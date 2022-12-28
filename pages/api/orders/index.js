import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method, query } = req;
  await dbConnect();
  console.log("okay called", req.body);

  if (method === "GET") {
    try {
      console.log("GET ran", req.body);
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  if (method === "POST") {
    console.log("request came body", req.body);
    try {
      const order = await Order.create(req.body);
      console.log("order created", order);
      res.status(201).json(order);
    } catch (err) {
      console.log("ok error happende");
      console.log(err);
      return res.status(500).json(err);
    }
  }
};
export default handler;
