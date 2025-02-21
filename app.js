import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plants.js";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/plants", plantRoutes);

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
