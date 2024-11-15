import app from "./app";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
