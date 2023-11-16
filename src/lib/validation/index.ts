
import * as z from "zod"
export const signupValidation = z.object({
    name: z.string().min(2,{message: 'Too short name'}).max(50),
    username: z.string().min(2,{message: 'Too short username'}).max(50),
    email: z.string().email(),
    password: z.string().min(8,{message: 'Password must be at 6 characters.'}),
  })