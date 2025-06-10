import type z from 'zod';
import type { registrationStepTwoSchema } from './schema';

export type StepTwoProps = {
  onSubmit: (data: StepTwoData) => void;
  onBack: () => void;
};

export type StepTwoData = z.infer<typeof registrationStepTwoSchema>;
