import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Alert = ({ open, onClose, onSubmit, content }) => {
  const handleClose = () => {
    onClose(false);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            autoFocus
          >
            Submit
          </Button>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Alert;
