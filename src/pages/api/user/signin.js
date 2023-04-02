import connectDb from "../../../../Database/connectMongoDb";
import User from "../../../../Database/models/user";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "POST") {
    const getUser = await User.findOne({ email: req.body.email , password: req.body.password});
    if (getUser !== null) {
    res.status(200).json({ info: "Sign in Succesfull", data: getUser, success: true }); //TODO Add email or password checks  
    } else res.status(400).json({ info: "User Does not Exhists", data: getUser, success: false });
  } else res.status(400).json({ info: "Internal Server Error", success: false });
}
