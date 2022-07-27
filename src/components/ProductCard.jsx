import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, TextField, styled } from "@mui/material";
import "./productCard.css";
import Slideshow from "./slideshow";
import PayButton from "./PayButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const Responsive = styled("Grid")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    bottom: 0,
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    width: "100%",
    zIndex: 3,
    backgroundColor: "white",
  },
}));

const ResButton = styled("Grid")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    minWidth: 70,
    paddingRight: 15,
  },
}));

const ProductCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [quantity, setQuantity] = React.useState(1);
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          sx={{ mt: 2, p: 1, alignItems: "center" }}
          paddingLeft={{ sm: 1, md: 3, lg: 5 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            order={{ sm: 2, xs: 2, md: 1, lg: 1 }}
            className="AbtProduct"
          >
            <a href="/">About Product</a>
          </Grid>
          <Grid
            container
            lg={6}
            md={6}
            xs={12}
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            order={{ sm: 4, xs: 4, md: 2, lg: 2 }}
          >
            <Responsive>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h5>Price:$299.00</h5>
                <ResButton>
                  <TextField
                    id="outlined-number"
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    value={quantity}
                    sx={{
                      width: { xs: 50, sm: 50, md: 55 },
                      "& .MuiInputBase-root": {
                        height: 30,
                      },
                      m: 1,
                    }}
                    onChange={(e) => setQuantity(e.target.value)}
                    autoFocus={true}
                  />
                </ResButton>
                <ResButton>
                  <PayButton
                    name={"New Apple AirPods (3rd Generation)"}
                    price={299}
                    quantity={quantity}
                  />
                </ResButton>
              </Grid>
            </Responsive>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            md={6}
            sx={{
              backgroundColor: "#F6F6F6",
              pb: "3rem",
              fontWeight: "200",
              pl: 10,
              pr: 2,
            }}
            order={{ sm: 3, xs: 3, md: 3, lg: 3 }}
          >
            <Typography sx={{ fontFamily: "Poppins" }}>
              {isMobile ? "" : <dd>APPLE PRODUCTS</dd>}

              <dd>
                <h3 sx={{ fontFamily: "Poppins" }}>
                  New Apple AirPods (3rd Generation)
                </h3>
              </dd>

              <dd>it's magic remastered!</dd>
              <ul>
                <li>
                  Spatial audio with dynamic head tracking places sound all
                  around you
                </li>
                <li>Adoptive EQ automatically tunes music to your ears</li>
                <li>All-new countoured design</li>
                <li>
                  Force sensor lets you easily control your entertainment answer
                  or end calls, and more
                </li>
                <li>Sweat and water resistant</li>
                <li>Up to 6 hours of listening time with one charge</li>
                <li>
                  Up to 30 hours of total listening time with the MogSafe
                  Charging Case
                </li>
                <li>Quick access to Siri by saying "Hey Siri"</li>
                <li>
                  Effortless setup, in-ear detection and automatic switching for
                  a magical experience
                </li>
                <li>
                  Easily share audio between two sets of AirPods on your
                  iPhone,ipad,iPad touch or Apple TV
                </li>
                <p>SKU D5515AI</p>
              </ul>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ height: "100%", width: "50%", mt: 4 }}
            order={{ sm: 1, xs: 1, md: 4, lg: 4 }}
          >
            <Slideshow />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ProductCard;
