export default function myMiddleware(req, res, next) {
  console.log("myMiddleware passed 1");
  next();
}

