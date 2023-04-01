import connectDb from "../../../../Database/connectMongoDb";
import Product from "../../../../Database/models/product";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "PUT") {
    const checkProduct = await Product.findByIdAndUpdate(req.body._id, req.body, { replace: true }); // TODO add validations
    if (checkProduct !== null) res.status(200).json({ info: "Product Updated Successfully", data: checkProduct, success: true });
    else {
      res.status(400).json({ info: "Product Not Found", success: false });
      // TODO add a prompt to which says "To add The product"
    }
  } else res.status(400).json({ info: "Internal Server Error", success: false });
}
