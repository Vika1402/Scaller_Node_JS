export default function customeMiddle(req, res, next) {
  console.log("custome middleware");
  next();
}
