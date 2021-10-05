import express from "express";
import dayjs from "dayjs";

const router = express.Router();

import Ticket from "../../database/models/Ticket";

router.get("/", (req, res) => {
  if (!req.query.status) {
    Ticket.find()
      .sort({ status: 1, updateTimeStamp: -1 })
      .then((item) => res.json(item));
  } else {
    Ticket.find({ status: req.query.status })
      .sort({ updateTimeStamp: -1 })
      .then((item) => res.json(item));
  }
});

router.post("/", async (req, res) => {
  const { title, description, contactInformation } = req.body;
  const newTicket = new Ticket({
    title: title,
    description: description,
    contactInformation: contactInformation,
  });
  try {
    await newTicket.save().then((ticket) => res.json(ticket));
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  const { title, description, contactInformation, status } = req.body;

  try {
    const targetTicket = await Ticket.findById(req.params.id);
    targetTicket.title = title || targetTicket.title;
    targetTicket.description = description || targetTicket.description;
    targetTicket.contactInformation =
      contactInformation || targetTicket.contactInformation;
    targetTicket.status = status || targetTicket.status;
    targetTicket.updateTimeStamp = dayjs(Date.now());

    const updateTicket = await targetTicket.save();

    res.json({
      ticket: updateTicket.toJSON(),
    });
  } catch (err) {
    next(err);
  }
});

export default router;
