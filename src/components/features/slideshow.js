import React from "react";
import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: './assets/Pictures/Before_after/trailer/Trailer.png',
    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/walkway/Walkway.png',
    // thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/walkway/Stairs.png',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery;