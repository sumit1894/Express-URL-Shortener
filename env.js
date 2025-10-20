
import {z} from "zod"

const PortSchema=z.coerce.number().min(1).max(65535).default(3000); //*coerce convert string into number
export const PORT=PortSchema.parse(process.env.PORT); //* now it can rn for string "3000" aslo
