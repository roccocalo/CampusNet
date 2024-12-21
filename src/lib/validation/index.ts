import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Il nome deve essere lungo almeno 2 caratteri. " }),
  username: z.string().min(2, { message: "L'username deve essere lungo almeno 2 caratteri. " }),
  email: z.string().email(),
  password: z.string().min(8, { message: "La password deve essere lunga almeno 8 caratteri. " }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "La password deve essere lunga almeno 8 caratteri. " }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Il nome deve essere lungo almeno 2 caratteri. " }),
  username: z.string().min(2, { message: "L'username deve essere lunga almeno 2 caratteri. " }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
