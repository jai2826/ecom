import connectDb from "../../../../Database/connectMongoDb";
import Product from "../../../../Database/models/product";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "DELETE") {
    await Product.findByIdAndDelete(req.body._id); // TODO add validations
    res.status(200).json({ info: "Product Deleted Successfully", success: true });
  } else res.status(200).json({ info: "Internal Server Error", success: false });
}
