import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
let courses = [
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
app.get("/about", (req, res) => {
  return res.json({ message: "About here !" });
});

app.get("/courses/:name", (req, res) => {
  // console.log(req.params);
  let name = req.params.name;
  let course = courses.find((course) => course.c_name === name);

  if (!course)
    res
      .status(404)
      .send("course you are loking for not available right now !!");
  else res.status(200).send(course);
});

app.get("/courses", (req, res) => {
  return res.send(courses);
});

//add data in courses arrays using post

app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    c_name: req.body.c_name,
    price: req.body.price,
  };
  courses.push(course);
  res.send(courses);
});

//put update already entity

app.put("/courses/:name", (req, res) => {
  let course = courses.find((course) => course.c_name == req.params.name);
  if (!course)
    res
      .status(404)
      .send("course you are loking for not available right now !!");

  course.c_name = req.body.name;
  course.price = req.body.price;
  res.send(course);
});

// app.delete("/courses/:name", (req, res) => {
//   let updatedCourse = courses.filter(
//     (course) => course.c_name !== req.params.name
//   );
//   courses = updatedCourse;
//   res.send(courses);
// });

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id == parseInt(req.params.id));
  if (!course)
    res
      .status(404)
      .send("course you are loking for not available right now !!");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});

//-----------------------------------------------------------------------------------------
// app.get("/courses/course_id/:id", (req, res) => {
//   // console.log(req.params);
//   let courseId = req.params.id;
//   let course = courses.find((course) => course.id === parseInt(courseId));
//   res.send(course);

//   if (!course)
//     res
//       .status(404)
//       .send("course you are loking for not available right now !!");
//   else res.send(course);
// });
77