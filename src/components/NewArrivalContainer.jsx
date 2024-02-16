import { Box, Container, Grid, Typography } from "@mui/material";
import NewArrivalCard from "./NewArrivalCard";
import './NewArrival.css'
const products = [
  {
    price: 440.0,
    imageSrc: "https://bzpets.myshopify.com/cdn/shop/products/12_685e5ff2-ee43-4bc9-a88b-71339bafd85b_large_crop_center.jpg?v=1678844901",
    description: "IQ Training & Mental Enrichment Dog Food",
    isNew: true
  },
  {
    price: 540.0,
    imageSrc: "https://bzpets.myshopify.com/cdn/shop/products/18_bb59dd53-f8f0-449c-a396-54c12a349b74_large_crop_center.jpg?v=1678844614",
    description: "Premium Dog Treats",
    isNew: false
  },
  {
    price: 320.0,
    imageSrc: "https://bzpets.myshopify.com/cdn/shop/products/5_1ca8c68d-62c7-4417-a850-5e7f51a1ee1f_large_crop_center.jpg?v=1678843482",
    description: "Healthy Dog Biscuits",
    isNew: true
  },
  {
    price: 750.0,
    imageSrc: "https://bzpets.myshopify.com/cdn/shop/products/19_large_crop_center.jpg?v=1678844411",
    description: "Organic Dog Food Pack",
    isNew: false
  },
  {
    price: 220.0,
    imageSrc: "https://bzpets.myshopify.com/cdn/shop/products/17_c8bcce2e-656f-44df-b771-84418548480c_large_crop_center.jpg?v=1678844777",
    description: "Chewy Dog Bones",
    isNew: true
  },
  {
    price: 640.0,
    imageSrc: "https://bzpets.myshopify.com/cdn/shop/products/7_09e47c3d-ae05-4f88-8f6e-48bd0f759a9c_large_crop_center.jpg?v=1676425378",
    description: "Deluxe Dog Bed",
    isNew: false
  }
];

const NewArrivalContainer = () => {
  return (
    <Container>
     <Typography variant="h4"  style={{ color: "#2c3454", marginBottom: "20px" , textAlign:'center',fontWeight:'400' , fontFamily:'cursive' , marginTop:'60px' , position:"relative" , left:'10px'}} >
        New Arrivals

        <Box className="title-content">
          
        </Box>
      </Typography>
    <Grid container spacing={3} mt={10} mr={10}>
  
      {products.map((product, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <NewArrivalCard
            price={product.price}
            imageSrc={product.imageSrc}
            description={product.description}
            isNew={product.isNew}
          />
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default NewArrivalContainer;
