import express from "express";
// import receiptsRoutes from "./routes/receiptsR.js";
import eventsRoutes from "./routes/eventsR.js";
import userRoutes from "./routes/usersR.js";
;
const app = express();
const port = 3005;
app.use(express.json());




// users users
app.use("/users", userRoutes);
// posts events
app.use("/events", eventsRoutes);
// // posts receipts
// app.use("/receipts", receiptsRoutes);







app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})

