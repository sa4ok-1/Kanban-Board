import type { StepOneData } from 'pages/Register/types/registrationStepOne';
import type { StepTwoData } from 'pages/Register/types/registrationStepTwo';

export type StepOneProps = {
  onSubmit: (data: StepOneData) => void;
};

export type StepTwoProps = {
  onSubmit: (data: StepTwoData) => void;
  onBack: () => void;
};
