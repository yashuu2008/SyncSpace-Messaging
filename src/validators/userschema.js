import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string(),
});
