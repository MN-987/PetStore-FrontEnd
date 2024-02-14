import {
  Box,
  Typography,
  Grid,
  IconButton,
  Link
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

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
                <Link
                  href="#"
                  sx={{
                    color: "#bdbcb6",
                    "&:hover": {
                      color: "#e63b67",
                    },
                    textDecoration: "none", 
                    display: "block",
                    fontSize: "16px",
                    marginBottom: "10px",
                    right:"100px"
                  }}
                >
                  &gt; About us
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#bdbcb6",
                    "&:hover": {
                      color: "#e63b67",
                    },
                    textDecoration: "none", 
                    display: "block",
                    fontSize: "16px",
                    marginBottom: "10px",
                    
                  }}
                >
                  &gt; Contact us
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#bdbcb6",
                    "&:hover": {
                      color: "#e63b67",
                    },
                    textDecoration: "none", 
                    display: "block",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  &gt; Shop
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#bdbcb6",
                    "&:hover": {
                      color: "#e63b67",
                    },
                    textDecoration: "none", 
                    display: "block",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  &gt; Products
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#bdbcb6",
                    "&:hover": {
                      color: "#e63b67",
                    },
                    textDecoration: "none", 
                    display: "block",
                    fontSize: "16px",
                    marginBottom: "10px",
                
                  }}
                >
                  &gt; Blogs
                </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Useful links
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Our Newes Letter
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="body2">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
