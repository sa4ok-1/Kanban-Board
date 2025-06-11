import { Dialog, DialogActions, DialogContent, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { MobileSearchDialogProps } from './type';

const MobileSearchDialog = ({
  open,
  onClose,
  children,
}: MobileSearchDialogProps) => {
  const { t } = useTranslation('task_board_page');

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MobileSearchDialog;
