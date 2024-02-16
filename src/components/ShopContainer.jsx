import { Box, Button, Container, Grid, Typography } from "@mui/material";

import "./ShopContainer.css"; 

const ShopContainer = () => {

  return (
    <Container sx={{marginTop:"100px"}}>
    <Grid container spacing={2} margin={0} justifyContent="center" >
      <Grid item xs={12} xl={6} md={6} >
        <Box style={{ position: "relative" }} className="container-image">
          <img
            src="https://bzpets.myshopify.com/cdn/shop/files/bn1.jpg?v=1679475652&width=800"
            alt="Banner 1"
            
            className="banner-image"
          />
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{
              fontFamily: "Bubblegum Sans, cursive",
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              position: "absolute",
              top: "50%",
              whiteSpace: "pre-line",
            }}
          >
            Organic Food {"\n"} For Pets{"\n"}
            <Button
              sx={{
                backgroundColor: "#f94073",
                display: "inline-block",
                borderRadius: "22px",
                padding: "10px 30px",
                color: "white",
                transition: "0.4s",

                "&:hover": {
                  backgroundColor: "#f80c4c",
                },
              }}
            >
              {" "}
              Shop now
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} xl={6} md={6} >
        <Box style={{ position: "relative" }} className="container-image" >
          <img
            src="https://bzpets.myshopify.com/cdn/shop/files/bn2.jpg?v=1679475652&width=800"
            alt="Banner 2"
            className="banner-image" 

          />
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{
              fontFamily: "Bubblegum Sans, cursive",
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              position: "absolute",
              top: "50%",
              whiteSpace: "pre-line",
            }}
          >
            Decor Items For{"\n"} Pets House{"\n"}
            <Button
              sx={{
                backgroundColor: "#f94073",
                display: "inline-block",
                borderRadius: "22px",
                padding: "10px 30px",
                color: "white",
                transition: "0.4s",
                "&:hover": {
                  backgroundColor: "#f80c4c",
                },
              }}
            >
              {" "}
              Shop now
            </Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
    </Container>
  );
};

export default ShopContainer;
