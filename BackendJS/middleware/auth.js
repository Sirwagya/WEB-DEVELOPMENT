import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token, "toeknn");

  if (!token) {
    return res.send("kaun hai app...");
  }

  try {
    let decode = jwt.verify(token, "hehehehehe");
    console.log(decode, "isse");
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
};

export const isAdmin = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.send("Invalid/Null Token");

  try {
    let decode = jwt.verify(token, "hehehehehe");

    if (decode.role !== "admin") {
      return res.send({
        msg: "VIP Only",
      });
    }

    next();
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
};
