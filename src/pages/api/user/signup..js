import connectDb from "../../../../Database/connectMongoDb";
import User from "../../../../Database/models/user";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "POST") {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser === null) {
      const newUser = await User.create(req.body); // TODO add validations
      res.status(200).json({ info: "User Created Succesfully", data: newUser, success: true });
    } else res.status(400).json({ info: "User Already Exhists", data: checkUser, success: false });
  } else res.status(400).json({ info: "Internal Server Error", success: false });
}
