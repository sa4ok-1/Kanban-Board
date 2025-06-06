import type z from 'zod';
import type { registrationStepOneSchema } from '../schemas/registrationStepOneSchema';

export type StepOneData = z.infer<typeof registrationStepOneSchema>;
