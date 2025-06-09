export interface DeleteDialogProps {
  open: boolean;
  taskTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}