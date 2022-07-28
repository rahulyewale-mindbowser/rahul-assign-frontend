import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "17rem",
  bgcolor: "background.paper",
  outline: "none",
  p: 2,
  textAlign: "center",
};

export default function CheckoutFailed() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate("../");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ float: "right", cursor: "pointer" }}>
            <span onClick={handleClose}>
              <CloseIcon />
            </span>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <CancelIcon color="error" fontSize="large" />
            </div>
            Purchase Canceled!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Something went wrong
            {/* <p>Get ready to experience the spacial audio with adaptive EQ that tunes music to your ears</p> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
