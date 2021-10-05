import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  contactInformation: {
    type: String,
  },
  createdTimeStamp: {
    type: Date,
    default: Date.now,
  },
  updateTimeStamp: {
    type: Date,
  },
  status: {
    type: String,
    default: "pending",
  },
});

export default mongoose.model("Ticket", TicketSchema);
