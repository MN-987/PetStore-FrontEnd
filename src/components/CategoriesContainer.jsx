import { Container, Grid, Typography } from "@mui/material"
import CategorieCard from "./CategorieCard"

const CategoriesContainer = () => {
  return (

<Container>
      {/* Title for the page */}
      <Typography variant="h4" style={{ color: '#2c3454', marginBottom: '20px' }}>
        Categories
      </Typography>

      <Grid container spacing={3} justifyContent="center">
       
          <Grid item xs={12} sm={6} md={4}>
            <CategorieCard
            
            />
          
          </Grid>
        
          <Grid item xs={12} sm={6} md={4}>
          <CategorieCard
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CategorieCard
            />
            </Grid>
      </Grid>
      </Container>
  )
}

export default CategoriesContainer