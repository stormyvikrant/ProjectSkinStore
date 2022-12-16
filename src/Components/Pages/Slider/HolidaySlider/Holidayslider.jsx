import { Box } from '@chakra-ui/react';
import React from 'react';
import HolidayImagejs from './Holidaysliderjs';


const HolidayImage = () => {
    const slides = [
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg", title: "beach" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg", title: "boat" },
       
      ];
      const containerStyles = {
        width: "93%",
        height: "400px",
        margin: "0 auto",
        
      };
  return (
    <Box>
      <div style={containerStyles}>
        <HolidayImagejs slides={slides}/>
      </div>
    </Box>
  );
}

export default HolidayImage;
