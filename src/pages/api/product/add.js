import connectDb from "../../../../Database/connectMongoDb";
import Product from "../../../../Database/models/product";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "POST") {
    const checkProduct = await Product.findOne({ slug: req.body.slug });
    console.log(req.body);
    if (checkProduct === null) {
      const newProduct = await Product.create(req.body); // TODO add validations
      res.status(200).json({ info: "Product Created Succesfully", data: newProduct, success: true });
    } else res.status(400).json({ info: "Product Already Exhists", data: checkProduct, success: false });
  } else res.status(400).json({ info: "Internal Server Error", success: false });
}
