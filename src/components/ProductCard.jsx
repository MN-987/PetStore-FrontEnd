import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';

// eslint-disable-next-line react/prop-types
export default function ProductCard({ title, description, price, firstImageUrl, secondImageUrl }) {
  const [hovered, setHovered] = React.useState(false);
  const handleImageHover = () => {
    setHovered(true);
  };
  const handleImageLeave = () => {
    setHovered(false);
  };

  return (
    <Card sx={{ maxWidth: 345 ,height:400 }} 
    onMouseEnter={handleImageHover} 
    onMouseLeave={handleImageLeave} 
    >
        <Box position='relative'> 
        <IconButton aria-label="add to favorites" sx={{
            position: 'absolute',
            top: "50%",
            right: 0,
            display: hovered ?'block': 'none',
            color: '#fc4d7d'
        }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{
            position: 'absolute',
            top: "30%",
            right: 0,   
            display: hovered ?'block': 'none',
            color: '#fc4d7d'
        }}>
          <VisibilityIcon />
        </IconButton>
      <CardMedia
      position="relative"
        component="img"
        height="194"
         image={hovered ? secondImageUrl : firstImageUrl} 
        alt="Dog Photo"
      
        style={{ cursor: 'pointer' ,height: 200, width: 200, margin: 'auto'  }}
      />
       </Box>
      <CardContent>

        <Typography variant="h6" color="text.secondary">
        {title}
        </Typography>   
        <Typography variant="body2" color="text.secondary" sx={{
            '&:hover': {
                color: '#fc4d7d'
            },
            cursor: 'pointer'
        }}>
{description}     
        </Typography>
        <Typography>
        <StarIcon></StarIcon>
         <StarIcon></StarIcon>
         <StarIcon></StarIcon>
         <StarIcon></StarIcon>
        </Typography>

  <Typography variant="h4" component="h4" color="error" sx={{position:'relative'}}>
        {price}$
        <AddShoppingCartIcon  sx={{
            position: 'absolute',
            right: "1%",
            display: hovered ?'block' : 'none',
        }}></AddShoppingCartIcon>
</Typography>

      </CardContent>
      <CardActions disableSpacing>
      
       
      </CardActions>
    </Card>
  );
}
