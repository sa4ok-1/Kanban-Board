import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import type { MobileSearchDialogProps } from './type';


const MobileSearchDialog: FC<MobileSearchDialogProps> = ({ open, onClose, children }) => {
  const { t } = useTranslation('task_board_page');

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('сlose')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MobileSearchDialog;