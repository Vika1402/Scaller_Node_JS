import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

const courses = [
  { id: 1, c_name: "javascript", price: 212 },
  { id: 2, c_name: "java", price: 322 },
  { id: 3, c_name: "mongoDb", price: 433 },
  { id: 4, c_name: "express js", price: 665 },
  { id: 5, c_name: "Recat js", price: 544 },
];

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
app.get("/courses/course_name/:name", (req, res) => {
  // console.log(req.params);
  let name = req.params.name;
  let course = courses.find((course) => course.c_name === name);

  if (!course)
    res
      .status(404)
      .send("course you are loking for not available right now !!");
  else res.send(course);
});

app.get("/courses/course_id/:id", (req, res) => {
  // console.log(req.params);
  let courseId = req.params.id;
  let course = courses.find((course) => course.id === parseInt(courseId));
  res.send(course);

  if (!course)
    res
      .status(404)
      .send("course you are loking for not available right now !!");
  else res.send(course);
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
