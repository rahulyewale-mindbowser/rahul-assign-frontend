// import React from 'react'
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useNavigate } from 'react-router-dom';

// const CheckoutSuccess = () => {
//     const navigate =useNavigate();
//     const [open, setOpen] = React.useState(true);

//   const handleClose = () => {
//     setOpen(false);
//     navigate('../')

//   };

//   return (
//     <div>
//         <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         style={{alignContent:'center'}}
//       >
//         <DialogTitle id="alert-dialog-title">
//             <h1><CheckCircleIcon  color='success' fontSize='large'/></h1>
//           {"Payment Successfull"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             You will get Your product soon!
//             <p>Get ready to experience the spacial audio with adaptive EQ that tunes music to your ears</p>
//           </DialogContentText>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

// export default CheckoutSuccess

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "17rem",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  outline: "none",
  // boxShadow: 24,
  p: 2,
  textAlign: "center",
};

export default function CheckoutSuccess() {
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
              <CheckCircleIcon style={{ color: "#5DCC1A" }} fontSize="large" />
            </div>
            Purchase Successfull
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You will get Your product soon!
            <p>
              Get ready to experience the spacial audio with adaptive EQ that
              tunes music to your ears
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
