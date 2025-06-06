import type z from 'zod';
import type { registrationStepTwoSchema } from '../schemas/registrationStepTwoSchema';

export type StepTwoData = z.infer<typeof registrationStepTwoSchema>;
