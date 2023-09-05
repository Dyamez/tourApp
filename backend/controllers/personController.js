import Person from "../models/Person.js/";

export const createPerson = async (req, res) => {
  const newPerson = new Person(req.body);

  try {
    const savedPerson = await newPerson.save();

    res
      .status(200)
      .json({ success: true, message: "You have Triumph", data: savedPerson });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Need to do it again & be patient" });
  }
};

export const updatePerson = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "You did it!",
      data: updatedPerson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "try again, sorry",
    });
  }
};

export const deletePerson = async (req, res) => {
  const id = req.params.id;
  try {
    await Person.findByIdAndDelete(id);
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

export const getSinglePerson = async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findById(id);
    res.status(200).json({
      success: true,
      message: "You did it!",
      data: person,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "better luck next time",
    });
  }
};

export const getAllPerson = async (req, res) => {
  //const page = parseInt(req.query.page);
  //console.log(page);
  try {
    const persons = await Person.find({});
    //.skip(page * 2)
    //.limit(2);
    res
      .status(200)
      .json({ success: true, message: "You did it!", data: persons });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "better luck next time",
    });
  }
};
