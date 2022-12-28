import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      console.log("got order", order);
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    console.log("we got", req.body);
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      console.log("got order", order);
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
  if (method === "POST") {
    console.log("This is post requrest");
  }
};

export default handler;
