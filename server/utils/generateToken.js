import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// this part was giving me a very silly error. I solved the problem by typing in backticks.
dotenv.config();
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
