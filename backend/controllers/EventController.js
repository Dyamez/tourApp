import Event from "../models/Event.js/";

export const createEvent = async (req, res) => {
  const newEvent = new Event(req.body);

  try {
    const savedEvent = await newEvent.save();

    res
      .status(200)
      .json({ success: true, message: "You have Triumph", data: savedEvent });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Need to do it again & be patient" });
  }
};

export const updateEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "You did it!",
      data: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "try again, sorry",
    });
  }
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    await Event.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "You did it!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "check if succeded",
    });
  }
};

export const getSingleEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findById(id);
    res.status(200).json({
      success: true,
      message: "You did it!",
      data: event,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "better luck next time",
    });
  }
};

export const getAllEvent = async (req, res) => {
  //const page = parseInt(req.query.page);
  //console.log(page);
  try {
    const events = await Event.find({});
    //.skip(page * 2)
    //.limit(2);
    res
      .status(200)
      .json({ success: true, message: "You did it!", data: events });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "better luck next time",
    });
  }
};

export const getEventBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const events = await Event.find({
      city,
      distance: { $gte: maxGroupSize },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      message: "Great Job",
      data: events,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "nothing to display",
    });
  }
};

export const getFeaturedEvent = async (req, res) => {
  try {
    const events = await Event.find({ featured: true });

    res
      .status(200)
      .json({ success: true, message: "You did it!", data: events });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "better luck next time",
    });
  }
};

export const getEventCount = async (req, res) => {
  try {
    const eventCount = await Event.estimatedDocumentCount();
    res.status(200).json({ successful: true, data: eventCount });
  } catch (error) {
    res
      .status(500)
      .json({ successful: false, message: "did not proceed to plan" });
  }
};
