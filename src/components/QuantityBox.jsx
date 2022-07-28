import { Typography, Stack, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLessIcon from "@mui/icons-material/ArrowDropUp";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const QuantityBox = () => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.quantity);
  const [qty, setQty] = useState();

  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        width: "3rem",
        height: "2rem",
        margin: "1rem",
        padding: ".2rem 1rem",
        justifyContent: "space-between",
        backgroundColor: "#F5F7FF",
        borderRadius: "10%",
      }}
    >
      <Typography>{qty}</Typography>
      <Stack style={{ display: "flex", cursor: "pointer" }}>
        {qty <= 2 ? (
          <span
            onClick={() => {
              dispatch(increment());
            }}
          >
            <ExpandLessIcon fontSize="small" />
          </span>
        ) : (
          <span aria-readonly>
            <ExpandLessIcon fontSize="small" color="" />
          </span>
        )}
        {qty > 1 ? (
          <span
            onClick={() => {
              dispatch(decrement());
            }}
          >
            {" "}
            <ExpandMoreIcon fontSize="small" />
          </span>
        ) : (
          <span aria-disabled="true">
            {" "}
            <ExpandMoreIcon fontSize="small" />
          </span>
        )}
      </Stack>
    </Box>
  );
};

export default QuantityBox;
