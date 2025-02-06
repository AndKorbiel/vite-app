import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type AlertDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleOnConfirm: () => void;
};

export const AlertDialog = ({
  handleClose,
  handleOnConfirm,
  open,
}: AlertDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to clear training data?
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deleted data cannot be restored and will need to be added again
          manually.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleOnConfirm}
          autoFocus
          variant="contained"
          color="error"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
