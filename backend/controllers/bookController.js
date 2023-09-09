import Book from "./../models/Book.js";

export const createBooking = async (req, res) => {
  const newBook = new Book(req.body);

  try {
    const savedBook = await newBook.save();

    res
      .status(200)
      .json({ success: true, message: "You are Golden", data: savedBooking });
  } catch (error) {
    res.status(500).json({ success: true, message: "There is an Error!" });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);

    res.status(200).json({ success: true, message: "Exelsior!", data: book });
  } catch (error) {
    res
      .status(404)
      .json({ success: true, message: "The Force is NOT with you." });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({ success: true, message: "Excelsior!", data: books });
  } catch (error) {
    res.status(500).json({ success: true, message: "Try again later." });
  }
};
