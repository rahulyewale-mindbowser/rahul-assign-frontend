import { Box, AppBar, Typography } from "@mui/material";

import React from "react";

const ContactBar = () => {
  return (
    <>
      <Box>
        <AppBar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "black",
            color: "whitesmoke",
            height: "2rem",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Typography style={{ fontSize: ".8rem" }}>
            {" "}
            <span style={{ color: "gray" }}>Mon-Thu:</span>8:30AM-5:30PM
          </Typography>
          <Typography style={{ fontSize: ".8rem" }}>
            Call Us:(00)1234 5678
          </Typography>
        </AppBar>
      </Box>
    </>
  );
};

export default ContactBar;
