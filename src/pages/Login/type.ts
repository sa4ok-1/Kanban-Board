import type z from 'zod';
import type { loginSchema } from './LoginSchemas';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface LoginFormProps {
  isSubmitting: boolean;
  onSubmit: () => Promise<void>;
  onNavigateToRegister: () => void;
  errors: FieldErrors<LoginFormData>;
  register: UseFormRegister<LoginFormData>;
}

export type LoginFormData = z.infer<typeof loginSchema>;
