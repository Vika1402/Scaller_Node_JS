import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
//get, put, post, delete
app.get("/", (req, res) => {
  return res.json({ message: "First express Server running by Vika" });
});
app.get("/contact", (req, res) => {
  return res.json({ message: "Contact here !" });
});
app.get("/about", (req, res) => {
  return res.json({ message: "About here !" });
});
app.get("/services", (req, res) => {
  return res.json({ message: "Services here !" });
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
