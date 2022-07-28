import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";
import "./productCard.css";
import Slideshow from "./slideshow";
import PayButton from "./PayButton";
import { Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import QuantityBox from "./QuantityBox";
import { useSelector } from "react-redux";

const Responsive = styled("Grid")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    bottom: 0,
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    width: "100%",
    zIndex: 3,
    backgroundColor: "white",
    height:'4rem',
  },
}));

const ResButton = styled("Grid")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    minWidth: 70,
    paddingRight: 15,
  },
}));

const ProductCard = () => {
  const { quantity } = useSelector((state) => state.quantity);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 7 }}
          sx={{ mt: 2, alignItems: "center" }}
          paddingLeft={{ sm: 1, md: 3, lg: 5 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            order={{ sm: 2, xs: 2, md: 1, lg: 1 }}
            className="AbtProduct"
            MarginLeft={{ lg: 25 }}
          >
            <Link href="#" paddingLeft={{ lg: 30, sm: 5, xs: 5, md: 5 }}>
              About Product
            </Link>
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
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}
              >
                <p>
                  Price<span style={{ fontWeight: "bold" }}> $299.00</span>
                </p>
                <QuantityBox />
                <ResButton>
                  <PayButton
                    name={"New Apple AirPods (3rd Generation)"}
                    price={299}
                    quantity={quantity}
                  />
                </ResButton>
              </div>
            </Responsive>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            md={6}
            sx={{
              backgroundColor: "#F6F6F6",
              pb: "4rem",
              fontWeight: "200",
              pl: 10,
              pr: 2,
            }}
            order={{ sm: 3, xs: 3, md: 3, lg: 3 }}
          >
            <Typography sx={{ fontFamily: "Poppins" }} paddingLeft={{ lg: 25 }} paddingRight={{lg:14}}>
              {isMobile ? (
                ""
              ) : (
                <dd style={{ color: "#A2A6B0",paddingTop:'2rem' }}>APPLE PRODUCTS</dd>
              )}

              <dd>
                <h3 sx={{ fontFamily: "Poppins",fontWeight:500 }}>
                New Apple AirPods (3rd Generation)
                </h3>
              </dd>

              <dd>It’s magic, remastered!</dd>
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
                <p style={{fontSize:'12px'}}>SKU D5515AI</p>
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
