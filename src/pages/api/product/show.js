import connectDb from "../../../../Database/connectMongoDb";
import Product from "../../../../Database/models/product";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "GET") {
    const getProduct = await Product.find();
    if (getProduct !== null) {
       res.status(200).json({ info: `${getProduct.length} Product Found`, data: getProduct, success: true });
    }else res.status(400).json({ info: "No Item to show!!! Select another category.", success: false });
  } else res.status(400).json({ info: "Internal Server Error", success: false });
}
