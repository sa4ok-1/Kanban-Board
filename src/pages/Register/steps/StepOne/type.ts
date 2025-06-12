import type z from 'zod';
import type { registrationStepOneSchema } from './schema';

export type StepOneProps = {
  onSubmit: (data: StepOneData) => void;
};

export type StepOneData = z.infer<typeof registrationStepOneSchema>;
