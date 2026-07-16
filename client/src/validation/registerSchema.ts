import { z } from "zod";

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .min(2, { message: "Full name must be at least 2 characters." })
            .max(50, { message: "Full name must be under 50 characters." }),
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters." })
            .max(20, { message: "Username must be under 20 characters." })
            .regex(/^[a-zA-Z0-9_]+$/, {
                message: "Username can only contain alphanumeric characters and underscores.",
            }),
        email: z.string().email({ message: "Please enter a valid email address." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." })
            .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter." })
            .regex(/[a-z]/, { message: "Must contain at least one lowercase letter." })
            .regex(/[0-9]/, { message: "Must contain at least one numerical digit." })
            .regex(/[^A-Za-z0-9]/, { message: "Must contain at least one special character." }),
        confirmPassword: z.string(), 
        agreeTerms: z.literal(true, {
            errorMap: () => ({ message: "You must accept the Terms and Conditions to proceed." }),
        }), 
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;