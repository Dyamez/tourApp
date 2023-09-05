import Person from "../models/Person.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registration = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newPerson = new Person({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
    });

    await newPerson.save();

    res.status(200).json({ success: true, message: "Congratulations" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Double check entry" });
  }
};

export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await Person.findOne({ email });

    if (!person) {
      return res
        .status(404)
        .json({ success: false, message: "non-exist user" });
    }

    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      person.password
    );

    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ succcess: false, message: "not correct username or password" });
    }

    const { password, role, ...rest } = person.doc;

    const token = jwt.sign(
      { id: person.id, role: person.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "45d" }
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "you have logged-in",
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "try again" });
  }
};
