import { z } from 'zod';

export const registrationStepTwoSchema = z.object({
  firstName: z.string().min(2, 'Name must contain at least 2 symbols'),
  lastName: z.string().min(2, 'Surname must contain at least 2 symbols'),
  avatar: z
    .any()
    .optional()
    .refine(
      (file) => !file || file instanceof File,
      'Avatar format must be changed',
    ),
});

export type StepTwoData = z.infer<typeof registrationStepTwoSchema>;
