

import { config } from "dotenv";
import { z } from "zod";

// const PortSchema=z.coerce.number().min(1).max(65535).default(3000); //*coerce convert string into number
// export const PORT=PortSchema.parse(process.env.PORT); //* now it can rn for string "3000" aslo

config(); // ✅ loads variables from .env


export const env = z.object({
  PORT: z.coerce.number().default(3000),
  MONGODB_UTI: z.string(),
//   MONGODB_DATABASE_NAME: z.string(),
}).parse(process.env);


