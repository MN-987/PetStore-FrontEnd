import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#303454',
        color: '#fff',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Stay Connected
          </Typography>
          <Typography variant="body2" gutterBottom>
            Connect with us on social media to stay up to date with our latest news, products, and promotions.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
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
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            Have questions or concerns? Feel free to reach out to our customer service team.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: <Link href="mailto:info@yourcompany.com" color="inherit">info@yourcompany.com</Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Phone: +123-456-7890
          </Typography>
          <Typography variant="body2" gutterBottom>
            Address: 1234 Main Street, City, Country, 12345
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="body2">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
