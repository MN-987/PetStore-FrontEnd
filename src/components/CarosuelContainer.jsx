import  { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Paper, Grid, Container, Button } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import styled, { keyframes } from 'styled-components';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://bzpets.myshopify.com/cdn/shop/files/slide1.jpg?v=1679390715&width=1920',
    text: 'Special Combo For Your Pets',

  },
  {
    imgPath:
      'https://bzpets.myshopify.com/cdn/shop/files/slide2.jpg?v=1679390731&width=1920',
    text: 'Our In-Home Pet Care Services'
  }
];

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const AnimatedText = styled.p`
  font-size: 50px;
  line-height: 80px;
  margin-bottom: 7px;
  font-weight: 400;
  font-family: Bubblegum Sans, cursive;
  position: absolute;
  color: white;
  top: 4%;
  animation: ${fadeInDown} 1.5s ease-in-out 0s normal none 1 running;
`;
function CarosuelContainer() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  useEffect(() => {
    setAnimateText(false); 
    setTimeout(() => {
      setAnimateText(true); 
    }, 10);
  }, [activeStep]);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container style={{ backgroundColor:"pink",display: 'flex', justifyContent: 'center'}}>
     
     
      <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: 2,
            bgcolor: 'background.default',
          }}
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 && (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={`slide-${index}`}
                />
                
              )}
              {animateText && <AnimatedText>
                <Container > {step.text}  
                <Button variant="contained" sx={{
                  bgcolor: '#ff4474',
                  color: 'white',
                  display:'block',
                }}>Shop Now</Button>
           

                </Container>
  
              </AnimatedText>}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </Grid>
  );
}

export default CarosuelContainer;
