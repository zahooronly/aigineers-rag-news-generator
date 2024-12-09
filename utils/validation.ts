import { z } from "zod";

export const contentGenerationSchema = z.object({
  topic: z
    .string()
    .min(1, "Topic is required")
    .max(100, "Topic must be 100 characters or less"),
  platform: z.enum(["Twitter", "LinkedIn", "Facebook", "Instagram"], {
    errorMap: () => ({ message: "Please select a valid platform" }),
  }),
  image: z.boolean(),
  video: z.boolean(),
  meme: z.boolean(),
});

export type ContentGenerationInput = z.infer<typeof contentGenerationSchema>;

export class ValidationError extends Error {
  public errors: Record<string, string[]>;

  constructor(message: string, errors: Record<string, string[]>) {
    super(message);
    this.name = "ValidationError";
    this.errors = errors;
  }
}

export function validateContentGenerationInput(
  input: unknown
): ContentGenerationInput {
  try {
    return contentGenerationSchema.parse(input);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const path = err.path.join(".");
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(err.message);
      });
      throw new ValidationError("Validation failed", errors);
    }
    throw error;
  }
}
