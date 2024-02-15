import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import Input from "@mui/joy/Input";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FooterLinksCard from "../FooterLinksCard";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#303454",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom mb={3}>
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ color: "#bbb9b5" }}>
            Address: 139 Brook Drive South Richmond Hill, New York 1067 USA
          </Typography>
          <Typography variant="body2" gutterBottom mb={3}>
            Email:{" "}
            <Typography sx={{ color: "#e43b67", display: "inline" }}>
              mostafanasserx01@gmail.com
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Box mb={3}>
              <img
                src="https://bzpets.myshopify.com/cdn/shop/files/footer.png?v=1680152744&width=800"
                alt="phone"
                style={{ width: "50px" }}
              />
            </Box>

            <Box>
              <Box sx={{ fontSize: 24, color: "#bbb9b5" }} mb={3}>
                Call to Order
              </Box>
              <Box sx={{ color: "#e43b67", fontSize: 30 }}>(+20)1554861653</Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <PinterestIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Qucik links
            <Box display={"flex"} flexDirection={"column"} flexBasis={1}>
              <FooterLinksCard title="About Us" />
              <FooterLinksCard title="Contact Us" />
              <FooterLinksCard title="Shop" />
              <FooterLinksCard title="Products" />
              <FooterLinksCard title="Blogs" />
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Useful links
            <Box display={"flex"} flexDirection={"column"} flexBasis={1}>
              <FooterLinksCard title="Special Offers" />
              <FooterLinksCard title="Privacy Policy" />
              <FooterLinksCard title="Team of Use" />
              <FooterLinksCard title="Portfolio" />
              <FooterLinksCard title="FAQs" />
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}  md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Our Newes Letter
          </Typography>
          <Typography
            variant="paragraph"
            sx={{ fontFamily: "cursive", fontSize: "12px" }}
          >
            Subscribe to the weekly newsletter for all the latest updates & get
            a 10% off bill offers.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
          <Input placeholder="Enter your email"
            startDecorator={<EmailIcon sx={{ minHeight: "16px" }} />}
            endDecorator={
              <Button
                sx={{
                  backgroundColor: "#ff4474",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#f80c4c",
                    color: "white",
                  },
                }}
              >
                Subscribe
              </Button>
            }
            sx={{
              "--Input-radius": "49px",
              "--Input-gap": "14px",
              "--Input-placeholderOpacity": 0.9,
              "--Input-focusedThickness": "5px",
              "--Input-minHeight": "56px",
              "--Input-paddingInline": "11px",
              "--Input-decoratorChildHeight": "34px",
            }}
          ></Input>
          </Box>  
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="body2">
          © 2024 Your Company. All rights reserved.
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
