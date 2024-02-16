import { Box, Container, Grid, Typography } from "@mui/material";
import CategorieCard from "./CategorieCard";
import './NewArrival.css'
const CategoriesContainer = () => {
  return (
    <Container >
     
      <Typography
        variant="h4"
        style={{ color: "#2c3454", marginBottom: "20px" , textAlign:'center',fontWeight:'400' , fontFamily:'cursive' , marginTop:'20px'}}
      >
         Shop By Category
         <Box className="title-content" sx={{marginLeft:'5px' , marginTop:'5px'}}>
          
          </Box>
      </Typography>

      <Grid container spacing={12} justifyContent="center">
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <CategorieCard
            title="Dog Food"
            imageUrl="https://bzpets.myshopify.com/cdn/shop/files/cat-1.jpg?v=1672719548&width=400"
            description="10 Items (s)"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={3} >
          <CategorieCard
            title="Fish Food"
            imageUrl="https://bzpets.myshopify.com/cdn/shop/files/cat-2.jpg?v=1672719584&width=400"
            description="15 Items (s)"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} >
          <CategorieCard
            title="Hamster Food"
            imageUrl="https://bzpets.myshopify.com/cdn/shop/files/cat-3.jpg?v=1672719604&width=400"
            description="6 Items (s)"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} >
          <CategorieCard
            title="Pet's Toy"
            imageUrl="https://bzpets.myshopify.com/cdn/shop/files/cat-4.jpg?v=1672719622&width=400"
            description="10 Items (s)"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoriesContainer;
