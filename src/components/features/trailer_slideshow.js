import React from 'react';
import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: './assets/Pictures/Before_after/trailer/trailer_perspect.jpeg',
    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/trailer/trailer_before.jpeg',
    // thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/trailer/trailer_after.jpeg',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/trailer/trailer_step.jpeg',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery;