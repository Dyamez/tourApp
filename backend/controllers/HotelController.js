import Hotel from "../models/Hotel.js";

// CREATE
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has beeen deleted");
  } catch (err) {
    next(err);
  }
};

// GET
export const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllHotels = async (req, res, next) => {
  try {
    const hotel = await Hotel.find();
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotelBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const hotels = await Hotel.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      message: "Great Job",
      data: hotels,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "nothing to display",
    });
  }
};

export const getFeaturedHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find({ featured: true });

    res
      .status(200)
      .json({ success: true, message: "You did it!", data: hotels });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "better luck next time",
    });
  }
};

export const getHotelCount = async (req, res) => {
  try {
    const hotelCount = await Hotel.estimatedDocumentCount();
    res.status(200).json({ successful: true, data: hotelCount });
  } catch (error) {
    res
      .status(500)
      .json({ successful: false, message: "did not proceed to plan" });
  }
};
