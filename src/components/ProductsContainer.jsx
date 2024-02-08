import ProductCard from "./ProductCard";
import products from "../data/products";
import { Container, Grid, Typography } from "@mui/material";
const ProductsContainer = () => { 
    console.log(products); 
return (

<Container>
      {/* Title for the page */}
      <Typography variant="h4" style={{ color: '#2c3454', marginBottom: '20px' }}>
        Featured Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              firstImageUrl={product.firstImageUrl}
              secondImageUrl={product.secondImageUrl}
            />
          </Grid>
        ))}
      </Grid>
      </Container>


//     <div>
//     {products.map((product, index) => (
//         <ProductCard 
//             key={index} 
//             title={product.title}
//             description={product.description}
//             price={product.price}
//             firstImageUrl={product.firstImageUrl}
//             secondImageUrl={product.secondImageUrl}
//         />
//     ))}
// </div>

  );
}
export default ProductsContainer;