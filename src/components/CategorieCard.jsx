import { Box, Typography } from '@mui/material';


const CategorieCard = () => {
    return (
        <div>
          <Box>
    <Typography variant="h6" color="text.secondary" sx={{
        borderRadius: '50%',
        border: '20px solid #f4f4f4',  
        height: '150px',
        width: '150px',    
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 1,
        transition: 'border-color 0.3s, transform 0.3s', 
        '&:hover': {
            border: '20px solid rgba(252, 77, 125, 0.5)',
            '& .dogText': {
                transform: 'scale(1.2)' 
            }
        },
        cursor : 'pointer',
    }}>
        <Typography className="dogText" sx={{
            color: '#fc4d7d',
            transition: 'transform 0.3s' 
        }}>
            <img src='https://bzpets.myshopify.com/cdn/shop/files/cat-1.jpg?v=1672719548&width=400' alt='dog' style={{width: '100px', height: '100px' , borderRadius:50}} />
        </Typography>

        
    </Typography>
    <Typography variant='h5' sx={{font:'22px',
    fontFamily:'cursive',   
    color:'#353a5a',
    cursor : 'pointer',
    '&:hover': {
        color: '#fc4d7d'    
    },
    marginLeft: '50px',
}}>
        Dog Food
    </Typography>
</Box>


          {/* <CircularProgress variant="determinate" value={100} sx={{
            color: '#fc4d7d',
            width: '200px',
          }} />
          <Typography variant="body1">Dog</Typography> */}
        </div>
      );
}

export default CategorieCard