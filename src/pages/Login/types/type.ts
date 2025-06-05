import type z from 'zod';
import type { loginSchema } from '../schema/LoginSchemas';

export interface LoginFormProps {
  isSubmitting: boolean;
  onSubmit: () => Promise<void>;
  onNavigateToRegister: () => void;
  errors: any;
  register: any;
}

export type LoginFormData = z.infer<typeof loginSchema>;
