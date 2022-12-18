import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

const Card = ({ slides, currentSlide }) => (
 
  <Box style={{width:'100%'}} className="cards">
    {slides.map((chunk, i, ) => (
      <Box  style={{width:'100%'}}
        key={chunk[0].id}
        className={currentSlide === i ? "visible" : "invisible"}
      >
        {chunk.map((slide) => (
          <Box  style={{width:'100%'}}  className="card" key={slide.id}>
             <Box  component="img"
               
                sx={{
                  height:"600px" ,
                  objectFit:"cover",
                  width: '100%',
                }} src={slide.imgurl}>
             </Box> 
            
             <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor:'color1t2',
              color:'white'
             }}>
             <Typography >{slide.title} </Typography> 
             <Typography >{slide.subtitle} </Typography> 
             </Box>
          </Box>
        ))}
      </Box>
    ))}
  </Box>
);

export default Card;
