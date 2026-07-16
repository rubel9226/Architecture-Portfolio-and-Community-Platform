import { z } from "zod";

export const loginSchema = z.object({
    identifier: z
        .string()
        .min(3, { message: "Email or username must be at least 3 characters." })
        .refine(
          (val) => {
            const isEmail = z.string().email().safeParse(val).success;
            const isValidUsername = /^[a-zA-Z0-9_]+$/.test(val);
            return isEmail || isValidUsername;
          },
          { message: "Please enter a valid email address or username." }
        ),  
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
    rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;