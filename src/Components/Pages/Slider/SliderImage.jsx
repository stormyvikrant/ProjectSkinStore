import { Box } from '@chakra-ui/react';
import React from 'react';
import ImageSlider from './ImageSlider';
const SliderImage = () => {
    const slides = [
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/46/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-2-1180x450.jpeg-050446.jpg", title: "beach" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg", title: "boat" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg", title: "forest" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/03/1207-STDCRE-44662-SS-MH-Beauty-Bag-Amend-1180x450-V1-050203.jpg", title: "city" },
      
      ];
      const containerStyles = {
        width: "93%",
        height: "400px",
        margin: "0 auto",
        
      };
  return (
    <Box>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </Box>
  );
}

export default SliderImage;
