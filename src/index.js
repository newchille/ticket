import server from "./server";
import connectDB from "../database";

const PORT = process.env.PORT || 5555;

const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Express server listning on port ${PORT}`);
    });
  } catch (e) {
    console.log("cannot connect mongo");
    console.log(e);
  }
};

startServer();
