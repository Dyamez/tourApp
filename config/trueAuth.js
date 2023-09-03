import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ success: false, message: "not allowed" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(401).json({ success: false, message: "not permitted" });
    }

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "administrator") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "does not compute" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "administrator") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "does not compute" });
    }
  });
};
